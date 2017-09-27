{% extends "../layout/layout.tpl" %}

{% block content %}
  <div class="list-panel">
     <div class="left-header">
        <a href="/?tag=all" class="index current">全部</a>
        <a href="/?tag=share" class="index">分享</a>
        <a href="/?tag=owncreate" class="index">原创</a>
        <a href="/?tag=job" class="index">招聘</a>
     </div>
     <div class="topic_list">
        {% for item in posts %}
        <div class="cell">
           <a class="title" href="/post/detail/{{item._id}}">{{item.title}}</a>
           <span class="date">{{item.update_time}}</span>
        </div>

        {% endfor %}
     </div>
  </div>
{% endblock %}