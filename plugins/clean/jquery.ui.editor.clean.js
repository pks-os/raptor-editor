$.ui.editor.registerPlugin('clean', {
    options: {
        stripAttrs: ['_moz_dirty'],
        stripAttrContent: {
            type: '_moz'
        },
        stripEmptyTags: [
            'h1', 'h2', 'h3', 'h4', 'h5',  'h6',
            'p'
        ],
        stripEmptyAttrs: [
            'class', 'id'
        ]
    },
    
    init: function(editor, options) {
        editor.bind('change', this.clean, this);
    },
        
    clean: function() {
        console.debug('clean function');
        var i;
        for (i = 0; i < this.options.stripAttrs.length; i++) {
            this.editor.getElement()
                .find('[' + this.options.stripAttrs[i] + ']')
                .removeAttr(this.options.stripAttrs[i]);
        }
        for (i = 0; i < this.options.stripAttrContent.length; i++) {
            this.editor.getElement()
                .find('[' + i + '="' + this.options.stripAttrs[i] + '"]')
                .removeAttr(this.options.stripAttrs[i]);
        }
        for (i = 0; i < this.options.stripEmptyTags.length; i++) {
            this.editor.getElement()
                .find(this.options.stripEmptyTags[i] + ':empty')
                .remove();
        }
        for (i = 0; i < this.options.stripEmptyAttrs.length; i++) {
            var attr = this.options.stripEmptyAttrs[i];
            this.editor.getElement()
                .find('[' + this.options.stripEmptyAttrs[i] + ']')
                .filter(function() {
                    return $.trim(this[attr]) === '';
                }).removeAttr(this.options.stripEmptyAttrs[i]);
        }
    }
});

$.ui.editor.registerUi({
    clean: {
        
        init: function(editor) {
            return editor.uiButton({
                title: _('Remove unnecessary markup from editor content'),
                click: function() {
                    editor.getPlugin('clean').clean();
                }
            });
        }
    }
});
