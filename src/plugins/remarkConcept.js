import { visit } from 'unist-util-visit';

/**
 * Remark plugin to transform :::concept{name="..."} directives into hidden placeholders
 * The actual concept content will be rendered by the page component
 */
export function remarkConcept() {
  return (tree, file) => {
    file.data.concepts = file.data.concepts || [];
    
    visit(tree, (node) => {
      if (node.type === 'containerDirective' && node.name === 'concept') {
        const name = node.attributes?.name;
        
        if (!name) {
          console.warn(':::concept directive missing name attribute');
          return;
        }

        file.data.concepts.push(name);
        
        // Replace with a hidden placeholder that marks the position
        node.type = 'html';
        node.value = `<span class="concept-marker" data-concept="${name}" style="display: none;"></span>`;
      }
    });
  };
}
