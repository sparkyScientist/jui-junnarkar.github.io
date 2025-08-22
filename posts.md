---
layout: default
title: Posts
permalink: /posts/
---

<section class="max-w-4xl mx-auto px-6 py-12">
  <h1 class="text-4xl font-bold text-center mb-12">All Posts</h1>
  <div class="grid md:grid-cols-2 gap-12">
    {% for post in site.posts %}
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col">
        {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="{{ post.image_alt | default: post.title }}" class="w-full h-48 object-cover">
        {% endif %}
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-2xl font-bold mb-2">
            <a class="hover:underline" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="text-gray-600 mb-4 flex-grow">
            {{ post.summary | default: post.excerpt | strip_html | truncate: 140 }}
          </p>
          <a href="{{ post.url | relative_url }}" class="text-blue-600 font-semibold hover:underline self-start">Read More →</a>
        </div>
      </div>
    {% endfor %}
  </div>
</section>
