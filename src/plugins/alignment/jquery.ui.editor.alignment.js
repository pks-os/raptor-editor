/**
 * @fileOverview Text alignment ui components
 * @author David Neilsen david@panmedia.co.nz
 * @author Michael Robinson michael@panmedia.co.nz
 */
Raptor.registerUi({

    /**
     * @name $.editor.ui.alignLeft
     * @augments Raptor.defaultUi
     * @class Aligns text left within the selected or nearest block-level element.
     * <br/>
     * Toggles <tt>text-align: left</tt>
     */
    alignLeft: /** @lends $.editor.ui.alignLeft.prototype */ {

        /**
         * @see Raptor.defaultUi#init
         */
        init: function(editor) {
            return editor.uiButton({
                title: _('Left Align'),
                click: function() {
                    selectionToggleBlockStyle({
                        'text-align': 'left'
                    }, editor.getElement());
                }
            });
        }
    },

    /**
     * @name $.editor.ui.alignJustify
     * @augments Raptor.defaultUi
     * @class Justifies text within the selected or nearest block-level element.
     * <br/>
     * Toggles <tt>text-align: justify</tt>
     */
    alignJustify: /** @lends $.editor.ui.alignJustify.prototype */ {

        /**
         * @see Raptor.defaultUi#init
         */
        init: function(editor) {
            return editor.uiButton({
                title: _('Justify'),
                click: function() {
                    selectionToggleBlockStyle({
                        'text-align': 'justify'
                    }, editor.getElement());
                }
            });
        }
    },

    /**
     * @name $.editor.ui.alignCenter
     * @augments Raptor.defaultUi
     * @class Centers text within the selected or nearest block-level element.
     * <br/>
     * Toggles: <tt>text-align: center</tt>
     */
    alignCenter: /** @lends $.editor.ui.alignCenter.prototype */  {

        /**
         * @see Raptor.defaultUi#init
         */
        init: function(editor) {
            return editor.uiButton({
                title: _('Center Align'),
                click: function() {
                    selectionToggleBlockStyle({
                        'text-align': 'center'
                    }, editor.getElement());
                }
            });
        }
    },

    /**
     * @name $.editor.ui.alignRight
     * @augments Raptor.defaultUi
     * @class Aligns text right within the selected or nearest block-level element.
     * <br/>
     * Toggles <tt>text-align: right</tt>
     */
    alignRight: /** @lends $.editor.ui.alignRight.prototype */  {

        /**
         * @see Raptor.defaultUi#init
         */
        init: function(editor) {
            return editor.uiButton({
                title: _('Right Align'),
                click: function() {
                    selectionToggleBlockStyle({
                        'text-align': 'right'
                    }, editor.getElement());
                }
            });
        }
    }
});
