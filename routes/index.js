var items = [{title:"文章1"},{title:"文章2"}];
exports.index = function(req, res) {
  res.render("index",{title:"文章列表", items:items});
};

exports.form = function(req, res) {
  res.render("form", {title:"发布文章", message:"内容"});
};

exports.create = function(req, res) {
  res.redirect("/");
};