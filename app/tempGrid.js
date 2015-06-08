/**
 * 
 * @author user
 */
function tempGrid() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    form.modelGrid.parentField = 'ownerRef';
    form.modelGrid.childrenField = 'pets';
    self.show = function () {
        form.show();
    };

    model.requery(function () {
    });

}
