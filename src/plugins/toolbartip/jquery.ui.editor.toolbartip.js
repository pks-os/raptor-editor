/**
 * @fileOverview Toolbar tips plugin
 * @author David Neilsen david@panmedia.co.nz
 */

/**
 * @name $.editor.plugin.toolbarTip
 * @augments Raptor.defaultPlugin
 * @class Converts native tool tips to styled tool tips
 */
Raptor.registerPlugin('toolbarTip', /** @lends $.editor.plugin.toolbarTip.prototype */ {

    /**
     * @see Raptor.defaultPlugin#init
     */
    init: function(editor, options) {
        if ($.browser.msie) {
            return;
        }
        this.bind('show, tagTreeUpdated', function() {
            $('.ui-editor-wrapper [title]').each(function() {
                $(this).attr('data-title', $(this).attr('title'));
                $(this).removeAttr('title');
            });
        });
    }

});