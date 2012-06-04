function toggleIframe(d) {
    var dParent = $(d).parent();
    var dContents = $(".demo-contents", dParent);
    var existingIframe = $('iframe', dContents);
    dContents.empty();
    if (existingIframe.length > 0) {
        $(d).text('Run Demo');
        return;
    }
    var toInsert = dContents.attr('data-src');
    var iFrame = $('<iframe></iframe>');
    iFrame.attr('src', toInsert);
    dContents.append(iFrame);
    $(d).text('Clear');
}
