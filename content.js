function getHTMLOfSelection() {
	var range,
		selection = window.getSelection();
	if (selection.rangeCount > 0) {
		range = selection.getRangeAt(0);
		var clonedSelection = range.cloneContents();
		var div = document.createElement('div');
		div.appendChild(clonedSelection);
		return div.innerHTML;
	}
	return '';
}
document.addEventListener('mouseup',function(event) {
    var sel = getHTMLOfSelection();
    if(sel.length) {
        chrome.extension.sendRequest({'message':'convertedMarkdown','data': sel},function(response){alert(response);});
	}
});
