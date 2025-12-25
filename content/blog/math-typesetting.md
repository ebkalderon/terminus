+++
title = "Math Typesetting"
description = "Learn how to render beautiful mathematical formulas on your site with KaTeX."
date = 2025-12-23
authors = ["Eyal Kalderon"]

[taxonomies]
tags = ["showcase", "markdown", "katex"]

[extra]
katex = true
+++

Terminus supports [$\KaTeX$](https://katex.org/), a fast, easy-to-use
JavaScript library for TeX math rendering on the Web.

{{ alert(type="info", title="TODO", text="Will elaborate more later...") }}

## Usage

To enable $\KaTeX$ support site-wide, add this to your site's `config.toml`:

```toml
[extra]
katex = true
```

Alternatively, $\KaTeX$ support may be enabled selectively on individual pages
(e.g. `content/blog/my-page.md`) or on an entire section of your site (e.g.
`content/blog/_index.md`) by adding the above to your frontmatter instead. For
instance:

```markdown,name=content/blog/my-page.md
+++
title = "My Page"
date = 2026-01-01

[extra]
katex = true
+++

This is some Markdown containing an inline $\KaTeX$ formula!
```

## Examples

```tex
$$
\displaystyle \frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$
```

$$
\displaystyle \frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$

```tex
$$
"\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$
```

$$
"\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$

```tex
$$
\displaystyle {1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots }= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \quad\quad \text{for }\lvert q\rvert<1.
$$
```

$$
\displaystyle {1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots }= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \quad\quad \text{for }\lvert q\rvert<1.
$$
