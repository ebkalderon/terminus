+++
title = "Shortcodes"
date = 2025-06-07
authors = ["Eyal Kalderon", "John Smith"]

[taxonomies]
tags = ["showcase", "shortcodes"]

[extra.social_media_image]
path = "example-hi-res-image.jpg"
alt_text = "A high-resolution photo of a partially disassembled mini PC"
+++

This theme includes some useful custom shortcodes that you can use to enhance
your posts. Whether you want to display a gallery of images, or format a
professional-looking reference section, these custom shortcodes have got you
covered.

<!-- more -->

## Alert Shortcode

Bring attention to information with these GitHub-style alert shortcodes. They
come in five `type`s: `note`, `tip`, `info`, `warning`, and `danger`.

{{ alert(type="note", text="Some **content** with _Markdown_ `syntax`. Here is [a `link`](#alert-shortcode).") }}
{{ alert(type="tip", text="Some **content** with _Markdown_ `syntax`. Here is [a `link`](#alert-shortcode).") }}
{{ alert(type="info", text="Some **content** with _Markdown_ `syntax`. Here is [a `link`](#alert-shortcode).") }}
{{ alert(type="warning", text="Some **content** with _Markdown_ `syntax`. Here is [a `link`](#alert-shortcode).") }}
{{ alert(type="danger", text="Some **content** with _Markdown_ `syntax`. Here is [a `link`](#alert-shortcode).") }}

You can change the `title` and `icon` of the alert. Both parameters take a
string and default to the type of alert. `icon` can be any of the available
alert types.

{{ alert(type="note", title="Custom title and icon", icon="tip", text="Some **content** with _Markdown_ `syntax`. Here is [a `link`](#alert-shortcode).") }}

### Usage

You can use alerts in two ways:

1. Inline with parameters:

   ```jinja
   {{/* alert(type="danger", icon="tip", title="An important tip", text="Stay hydrated~") */}}
   ```

2. With a content body:

   ```jinja
   {%/* alert(type="danger", icon="tip", title="An important tip") */%}
   Stay hydrated~

   This method is particularly useful for longer content or multiple paragraphs.
   {%/* end */%}
   ```

Both methods support the same parameters (`type`, `icon`, and `title`), with the
content either passed as the `text` parameter or as the body between tags.

{% alert(type="note") %}
Zola will add GitHub-flavored Markdown alerts in a later release, such as:

```markdown
[!NOTE]
This is a note.
```

See [getzola/zola#2817](https://github.com/getzola/zola/issues/2817) for
details. When this feature is available upstream, the `alert` shortcode will be
deprecated. {% end %}

## Mastodon Shortcode

Embed a Mastodon post into your content using the `mastodon` shortcode.

{{ mastodon(url="https://hachyderm.io/@ebkalderon/114462281016082381") }}

### Usage

```jinja
{{/* mastodon(url="https://hachyderm.io/@ebkalderon/114462281016082381") */}}
```

## References

This shortcode formats a reference section with a hanging indent like so:

{% references() %}

Alderson, E. (2015). Cybersecurity and Social Justice: A Critique of Corporate
Hegemony in a Digital World. *New York Journal of Technology, 11*(2), 24-39.
[https://doi.org/10.1007/s10198-022-01497-6](https://doi.org/10.1007/s10198-022-01497-6).

Funkhouser, M. (2012). The Social Norms of Indecency: An Analysis of Deviant
Behavior in Contemporary Society. *Los Angeles Journal of Sociology, 16*(3),
41-58. [https://doi.org/10.1093/jmp/jhx037](https://doi.org/10.1093/jmp/jhx037).

Schrute, D. (2005). The Beet Farming Revolution: An Analysis of Agricultural
Innovation. *Scranton Agricultural Quarterly, 38*(3), 67-81.

Steinbrenner, G. (1997). The Cost-Benefit Analysis of George Costanza: An
Examination of Risk-Taking Behavior in the Workplace. *New York Journal of
Business, 12*(4), 112-125.

Winger, J. A. (2010). The Art of Debate: An Examination of Rhetoric in Greendale
Community College's Model United Nations. *Colorado Journal of Communication
Studies, 19*(2), 73-86.
[https://doi.org/10.1093/6seaons/1movie](https://doi.org/10.1093/6seaons/1movie).

{% end %}

### Usage

```jinja
{%/* references() */%}

Your references go here.

Each in a new line. Markdown (links, italics...) will be rendered.

{%/* end */%}
```

## Responsive Image Shortcode

Convert a high-resolution source image into a responsive image using the
`responsive_image` shortcode.

{{ responsive_image(src="example-hi-res-image.jpg", alt="Responsive hi-res image") }}

By default, `responsive_image` will generate **at most** five versions of the
source image, with the following maximum widths (measured in pixels):

1. 640×_height_
2. 784×_height_
2. 1280×_height_
3. 1920×_height_
4. 2560×_height_

The browser will automatically select the smallest possible resolution while
still retaining visual sharpness. Which image the browser displays depends on
the device's native screen resolution, pixel density, viewport size, etc.

### Usage

```jinja
{{/* responsive_image(src="example-hi-res-image.jpg", alt="Responsive hi-res image") */}}
```

The default behavior of the `responsive_image` shortcode can be overridden by
adding the following lines to your website's `config.toml`.

```toml
[extra.responsive_images]
widths = [640, 784, 1280, 1920, 2560]
fallback_width = 1280
```

Responsive images are lazy-loaded by default to improve performance for
below-the-fold content ([see MDN docs]). This behavior can be overridden on a
case-by-case basis by passing `lazy=false` to the `responsive_image` shortcode.

[see MDN docs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#loading

## Wide Container Shortcode

Use this shortcode if you want to have a wider table, paragraph, code block...
On desktop, it will take up the width of the article. It will have no effect on
mobile, except for tables, which will get a horizontal scroll.

{% wide_container() %}

| Title             |  Year | Director             | Cinematographer       | Genre         | IMDb  | Duration     |
|-------------------|-------|----------------------|-----------------------|---------------|-------|--------------|
| Beoning           | 2018  | Lee Chang-dong       | Hong Kyung-pyo        | Drama/Mystery | 7.5   | 148 min      |
| The Master        | 2012  | Paul Thomas Anderson | Mihai Mălaimare Jr.   | Drama/History | 7.1   | 137 min      |
| The Tree of Life  | 2011  | Terrence Malick      | Emmanuel Lubezki      | Drama         | 6.8   | 139 min      |

{% end %}

### Usage

```jinja
{%/* wide_container() */%}

Place your code block, paragraph, table… here.

Markdown will of course be rendered.

{%/* end */%}
```
