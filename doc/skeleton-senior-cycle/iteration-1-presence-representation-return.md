# Iteration 1 (initial) — Presence, Representation, Return

Iteration 1 is the initial round. One round = three phases: Presence, Representation, Return.

This round draws the whole shop with the names visible. The numbers are written by hand. Nothing is wired.

## Presence

Broad attention. The data model comes first.

### Draft

The draft is [`data-model-draft.json`](data-model-draft.json). The screen uses the same names and the same numbers.

```json
{
  "products": [
    { "id": "keyboard", "name": "Keyboard", "price": 49 },
    { "id": "mouse", "name": "Mouse", "price": 25 }
  ],
  "cart": {
    "lines": [
      { "productId": "mouse", "name": "Mouse", "price": 25, "qty": 1 }
    ],
    "totals": {
      "units": 1,
      "subtotal": 25,
      "tax": 5.25,
      "shipping": 4.95,
      "total": 35.2
    }
  }
}
```

`total` is 35.2 on purpose. 25 + 5.25 + 4.95 was added by hand. The screen prints it as 35.20 €. The app does not add it.

### Open questions

Asked of the draft, before any state exists.

- Does a cart line hold `productId` only, or a copy of `name` and `price` as well? The draft copies them, so the line can be read without looking up the product. If the product price changes, the copy goes stale.
- Are `totals` stored on the cart, or derived when the screen is drawn? They are written out here so the screen has something to show. Stored totals drift away from `lines`.
- Where do `tax` and `shipping` come from? They are not fields on a product or on a line. A rate, a table, or a fixed number are three different models. 5.25 happens to be 21% of 25, and 4.95 is a shipping price written by hand. The draft does not yet say that this is the rule.

### Feature

A small shop shows two products with prices. Under them, a cart already holds one line, Mouse × 1. The header shows how many units that is. Under the line, subtotal, tax, shipping, and a total are written out. The shopper can see the whole purchase on one screen. Buttons are drawn. They do not change anything.

### Goal of this round

The whole screen is visible and every piece is named.

### Sketch

```
My Shop                                          🛒 1
----------------------------------------------------
Products

Keyboard — 49 €                       [Add to cart]
Mouse — 25 €                          [Add to cart]

Cart

Mouse × 1 — 25 €                               [ − ]

Subtotal                                    25.00 €
Tax                                          5.25 €
Shipping                                     4.95 €
Total                                       35.20 €
```

My Shop is the page title. It is not a field in the draft.

### Unknowns

- The line's `productId` is in the draft and not on the screen. The shopper reads the name.
- Tax and shipping have numbers and no story yet. See the questions above.
- The two product rows repeat. That repetition is left on the page so it can be seen.
- A click has nowhere to go. Add, remove, and the total are comments in `src/App.jsx`.

## Representation

Narrow attention. Names, and where each one sits. No state and no handlers in this round.

| Name | Where it sits | Draft field |
| --- | --- | --- |
| `App` | The page | — |
| `Header` | Top band | — |
| `CartBadge` | In the header | `cart.totals.units` |
| `ProductList` | The shelf | `products` |
| `ProductCard` | One shelf row | one object in `products` |
| `Cart` | Under the shelf | `cart` |
| `CartLine` | One line in the cart | one object in `cart.lines` |
| `CartTotal` | Under the lines | `cart.totals` |

`ProductCard` is used twice. The words Keyboard, Mouse, 49, and 25 are written in the JSX. There is no `products` array in the code.

```
App
├── Header
│   └── CartBadge          🛒 1
├── ProductList
│   ├── ProductCard        Keyboard — 49 €
│   └── ProductCard        Mouse — 25 €
└── Cart
    ├── CartLine           Mouse × 1 — 25 €
    └── CartTotal          subtotal, tax, shipping, total
```

Comments mark the flow that is not built yet:

- `later: add → Cart` on each product row
- `remove` on the line
- `total = sum(lines)` above the totals

All of this lives in `src/App.jsx`. There is no other source folder.

## Return

The page was run with `npm run dev` and compared with the sketch above, not with a later design.

![Iteration 1. My Shop, two hard-coded products, one cart line, badge 1, hand-written totals.](render-iteration-1.png)

What agrees:

- The header is My Shop and a badge of 1, which is `totals.units`.
- Both products are on the shelf, Keyboard 49 € and Mouse 25 €, each with an Add to cart button.
- The cart has one line, Mouse × 1 — 25 €, and a minus button.
- Subtotal 25.00, tax 5.25, shipping 4.95, and total 35.20 sit under the line, in that order.
- Clicking Add, minus, or anywhere else leaves the screen as it is. That is this round.

What the picture adds:

- The two product rows are the same shape written twice. The sketch shows that, and the code does too. The name `ProductCard` is ready; the values are not shared.
- The total is a number typed into the JSX. It matches the hand sum in the draft. Nothing checks it.

Next step: Iteration 2: replace hard-coded values with one products array and props.
