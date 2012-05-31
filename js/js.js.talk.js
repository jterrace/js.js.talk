function toggleIframe(d) {
    var dParent = $(d).parent();
    var dContents = $(".demo-contents", dParent);
    if (dContents.children().length > 0) {
        dContents.empty();
        $(d).text('Run Demo');
        return;
    }
    var toInsert = dContents.attr('data-src');
    var iFrame = $('<iframe></iframe>');
    iFrame.attr('src', toInsert);
    dContents.append(iFrame);
    $(d).text('Clear');
}
