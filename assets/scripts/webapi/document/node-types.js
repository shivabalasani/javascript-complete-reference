/*The read-only Node.nodeType property is an integer that identifies what the node is. It distinguishes different kind of nodes 
from each other, such as elements, text and comments.

Syntax
var type = node.nodeType;
Returns an integer which specifies the type of the node. Possible values are listed in Node type constants.

Constants
Node type constants
Constant	                Value	Description
Node.ELEMENT_NODE	        1	An Element node like <p> or <div>.
Node.TEXT_NODE	            3	The actual Text inside an Element or Attr.
Node.CDATA_SECTION_NODE	    4	A CDATASection, such as <!CDATA[[ … ]]>.
Node.PROCESSING_INSTRUCTION_NODE	7	A ProcessingInstruction of an XML document, such as <?xml-stylesheet … ?>.
Node.COMMENT_NODE	        8	A Comment node, such as <!-- … -->.
Node.DOCUMENT_NODE	        9	A Document node.
Node.DOCUMENT_TYPE_NODE	    10	A DocumentType node, such as <!DOCTYPE html>.
Node.DOCUMENT_FRAGMENT_NODE	11	A DocumentFragment node. */

//Different types of nodes
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

document.createDocumentFragment().nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

var p = document.createElement("p");
p.textContent = "Once upon a time…";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true

//This example checks if the first node inside the document element is a comment, and displays a message if not.
var node = document.documentElement.firstChild;
if (node.nodeType !== Node.COMMENT_NODE) {
  console.warn("You should comment your code!");
}