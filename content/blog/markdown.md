+++
title = "Markdown Syntax Guide"
description = "This is an article description _with_ **some** ~~Markdown~~."
date = 2025-05-18
updated = 2025-06-17

[taxonomies]
tags = ["showcase", "markdown"]
categories = ["hello"]
+++

This article offers a sample of basic Markdown syntax that can be used in Zola
content files, also it shows whether basic HTML elements are decorated with CSS
in a Zola theme.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section
headings. `<h1>` is the highest section level while `<h6>` is the lowest.


# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum,
voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma
dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as
cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin
porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur?
Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit
ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda
veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore
eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata
tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne
sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source,
optionally with a citation which must be within a `footer` or `cite` element,
and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a ~~blockquote~~.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.
>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's
    [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest,
    November 18, 2015.

## Buttons and links

<button>Button</button>
<a href="">Link</a>

## Tables

Tables aren't part of the core Markdown spec, but Zola supports them out of the
box.

Name  | Age
----- | ---
Bob   | 27
Alice | 23

#### Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested Unordered List

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
- Third item
   - Sub One
   - Sub Two
     - Sub Three
     - Sub Four

#### Nested Ordered List

1. Fruit
    - Apple
    - Orange
    - Banana
2. Dairy
    1. Milk
    2. Cheese
3. Third item
    1. Sub One
    2. Sub Two
       1. Sub Three
       2. Sub Four

#### Task List

- [x] Completed item
- [ ] Incomplete item
  - [x] Nested completed item
  - [ ] Nested incomplete item

## Preformatted Text

```
This text is preformatted!
   This hanging indent is preserved.
```

## Code Blocks

### Regular

```rust
fn main() {
    println!("Hello, world!");
}
```

### With Line Numbers

```rust,linenos,hl_lines=10,name=~/incredibly/long/file/path/src/main.rs
use std::collections::HashMap;

#[derive(Debug)]
struct TwinPeaksCharacter {
    name: String,
    coffee_rating: f32,
    pie_preference: String,
}

fn main() {
    let mut black_lodge = HashMap::new();

    black_lodge.insert("agent", TwinPeaksCharacter {
        name: String::from("Dale Cooper"),
        coffee_rating: 9999.99,
        pie_preference: String::from("Damn Fine Cherry"),
    });

    black_lodge.insert("giant", TwinPeaksCharacter {
        name: String::from("The Fireman"),
        coffee_rating: 42.424242,
        pie_preference: String::from("Garmonbozia"),
    });

    // Calculate total appreciation of damn fine coffee
    let total_coffee: f32 = black_lodge.values()
        .map(|character| character.coffee_rating)
        .sum();

    println!("☕ Total coffee appreciation: {:.2} cups", total_coffee);
}
```

## Other Elements — abbr, sub, sup, kbd, details, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the
session.

<details>
<summary>Something wicked this way comes</summary>

**Boo!** :ghost:

Ha ha, scared ya!
</details>

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and
other small creatures.
