// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 14px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="text.html">Text</a></li> \
		<li><a href="contact.html">contact</a></li> \
		<li><a href="events.html">events</a></li> \
		<li><a href="collections.html">collections</a></li> \
		<li><a href="collections2.html">collections2</a></li> \
		<li><a href="report.html">report</a></li> \
		<li><a href="report2.html">report2</a></li> \
		<li><a href="articles.html">articles</a></li> \
		<li><a href="gallery.html">gallery</a></li> \
		<li><a href="item.html">item</a></li> \
		<li><a href="item2.html">item2</a></li> \
		<li><a href="catalog.html">catalog</a></li> \
		<li><a href="page404.html">page404</a></li> \
		<li><a href="index.html">Index</a></li> \
	</ol> \
</div>');