---
layout: page
title: Project Posts
permalink: /posts/
---

{% for post in site.posts %}
- **[{{ post.title }}]({{ post.url | relative_url }})** <span class="text-gray-500">— {{ post.date | date: "%b %-d, %Y" }}</span>
  {% if post.summary %}<br>{{ post.summary }}{% endif %}
{% endfor %}

