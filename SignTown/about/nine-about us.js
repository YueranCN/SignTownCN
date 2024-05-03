/**
 * 执行搜索功能
 */
function performSearch() {
    // 获取输入框的值
    var searchQuery = document.getElementById('search-input').value;

    // 简单的验证，确保搜索内容不为空
    if (searchQuery.trim() === '') {
        alert('请输入搜索内容');
        return;
    }

    // 显示搜索结果（这里仅作为示例，实际应用中应与后端搜索服务集成）
    document.getElementById('search-results').innerText = '搜索结果: ' + searchQuery;

    // 实际应用中，您可能需要将searchQuery发送到服务器进行搜索
    // 例如，使用fetch API或者XMLHttpRequest发起请求
}

/**
 * 显示下拉菜单
 * @param li 父级菜单项
 */
function show(li) {
    var submenu=li.getElementsByTagName("ul")[0];
    submenu.style.display="block";
}

/**
 * 隐藏下拉菜单
 * @param li 父级菜单项
 */
function hide(li) {
    var submenu=li.getElementsByTagName("ul")[0];
    submenu.style.display="none";
}