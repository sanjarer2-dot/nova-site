
/* NOVA CORE — shared store logic */
(function (window, document) {
    "use strict";

    const CART_KEY = "novaCart";
    const FAVORITES_KEY = "novaFavorites";
    const CURRENCY = "USD";

    const moneyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: CURRENCY,
        maximumFractionDigits: 2
    });

    function formatPrice(value) {
        const number = Number(value);
        if (!Number.isFinite(number) || number < 0) {
            return moneyFormatter.format(0);
        }
        return moneyFormatter.format(number);
    }

    function readJSON(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            if (raw === null) return fallback;
            return JSON.parse(raw);
        } catch (error) {
            console.warn("NOVA: invalid local data:", key);
            return fallback;
        }
    }

    function writeJSON(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error("NOVA: unable to save:", key, error);
            return false;
        }
    }

    function normalizeCart(input) {
        if (!Array.isArray(input)) return [];

        const combined = new Map();

        input.forEach(function (item) {
            if (!item || item.id === undefined || item.id === null) return;

            const id = String(item.id).trim();
            if (!id) return;

            let quantity = Number(item.quantity);
            if (!Number.isFinite(quantity) || quantity < 1) quantity = 1;
            quantity = Math.floor(quantity);

            const current = combined.get(id) || 0;
            combined.set(id, Math.min(current + quantity, 999));
        });

        return Array.from(combined, function (entry) {
            return {
                id: entry[0],
                quantity: entry[1]
            };
        });
    }

    function getCart() {
        const cart = normalizeCart(readJSON(CART_KEY, []));
        return cart;
    }

    function saveCart(cart) {
        const normalized = normalizeCart(cart);
        const saved = writeJSON(CART_KEY, normalized);

        if (saved) {
            window.dispatchEvent(new CustomEvent("nova:cart-updated", {
                detail: { cart: normalized }
            }));
        }

        return saved;
    }

    function addToCart(id, quantity) {
        if (id === undefined || id === null || String(id).trim() === "") {
            return false;
        }

        const amount = Number(quantity);
        const safeAmount = Number.isFinite(amount) && amount >= 1
            ? Math.min(Math.floor(amount), 999)
            : 1;

        const cart = getCart();
        const existing = cart.find(function (item) {
            return item.id === String(id);
        });

        if (existing) {
            existing.quantity = Math.min(existing.quantity + safeAmount, 999);
        } else {
            cart.push({
                id: String(id),
                quantity: safeAmount
            });
        }

        return saveCart(cart);
    }

    function setQuantity(id, quantity) {
        const safeId = String(id);
        const amount = Number(quantity);
        const cart = getCart();

        if (!Number.isFinite(amount) || amount <= 0) {
            return saveCart(cart.filter(function (item) {
                return item.id !== safeId;
            }));
        }

        const item = cart.find(function (entry) {
            return entry.id === safeId;
        });

        if (!item) return false;

        item.quantity = Math.min(Math.floor(amount), 999);
        return saveCart(cart);
    }

    function removeFromCart(id) {
        const safeId = String(id);
        return saveCart(getCart().filter(function (item) {
            return item.id !== safeId;
        }));
    }

    function clearCart() {
        return saveCart([]);
    }

    function getCartCount() {
        return getCart().reduce(function (total, item) {
            return total + item.quantity;
        }, 0);
    }

    /*
     * products: optional array of product objects.
     * Each product should contain id and price.
     * Missing products are ignored rather than assigned fake prices.
     */
    function getCartTotal(products) {
        if (!Array.isArray(products)) return 0;

        const byId = new Map(products.map(function (product) {
            return [String(product.id), product];
        }));

        return getCart().reduce(function (total, item) {
            const product = byId.get(item.id);
            if (!product) return total;

            const price = Number(product.price);
            if (!Number.isFinite(price) || price < 0) return total;

            return total + price * item.quantity;
        }, 0);
    }

    function getFavorites() {
        const favorites = readJSON(FAVORITES_KEY, []);
        if (!Array.isArray(favorites)) return [];

        return Array.from(new Set(favorites
            .filter(function (id) {
                return typeof id === "string" || typeof id === "number";
            })
            .map(String)));
    }

    function saveFavorites(favorites) {
        const normalized = Array.from(new Set(
            favorites.map(String)
        ));

        const saved = writeJSON(FAVORITES_KEY, normalized);

        if (saved) {
            window.dispatchEvent(new CustomEvent("nova:favorites-updated", {
                detail: { favorites: normalized }
            }));
        }

        return saved;
    }

    function toggleFavorite(id) {
        if (id === undefined || id === null || String(id).trim() === "") {
            return false;
        }

        const safeId = String(id);
        const favorites = getFavorites();
        const index = favorites.indexOf(safeId);

        if (index === -1) {
            favorites.push(safeId);
        } else {
            favorites.splice(index, 1);
        }

        saveFavorites(favorites);
        return favorites.includes(safeId);
    }

    function updateCartCounters() {
        const count = getCartCount();

        document.querySelectorAll(
            "#homeCartCount, [data-nova-cart-count]"
        ).forEach(function (element) {
            element.textContent = String(count);
        });
    }

    function updateFavoriteButtons() {
        const favorites = new Set(getFavorites());

        document.querySelectorAll("[data-nova-favorite]").forEach(function (button) {
            const id = String(button.getAttribute("data-nova-favorite"));
            const active = favorites.has(id);

            button.classList.toggle("is-favorite", active);
            button.setAttribute("aria-pressed", String(active));

            if (button.hasAttribute("data-nova-favorite-label")) {
                button.textContent = active ? "♥" : "♡";
            }
        });
    }

    function refreshUI() {
        updateCartCounters();
        updateFavoriteButtons();
    }

    window.NOVA = Object.freeze({
        currency: CURRENCY,
        formatPrice: formatPrice,
        getCart: getCart,
        saveCart: saveCart,
        addToCart: addToCart,
        setQuantity: setQuantity,
        removeFromCart: removeFromCart,
        clearCart: clearCart,
        getCartCount: getCartCount,
        getCartTotal: getCartTotal,
        getFavorites: getFavorites,
        saveFavorites: saveFavorites,
        toggleFavorite: toggleFavorite,
        refreshUI: refreshUI
    });

    window.addEventListener("storage", function (event) {
        if (
            event.key === CART_KEY ||
            event.key === FAVORITES_KEY ||
            event.key === null
        ) {
            refreshUI();
        }
    });

    window.addEventListener("nova:cart-updated", updateCartCounters);
    window.addEventListener("nova:favorites-updated", updateFavoriteButtons);
    window.addEventListener("pageshow", refreshUI);

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", refreshUI);
    } else {
        refreshUI();
    }
})(window, document);
