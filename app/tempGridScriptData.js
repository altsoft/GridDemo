/**
 * 
 * @author user
 */
function tempGridScriptData() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    var arr = [];
    
    var parentOne = new Object();
    parentOne.name = "Parent One";
    parentOne.childrenField = [];
    arr.push(parentOne);
    
    var parentTwo = new Object();
    parentTwo.name = "Parent Two";
    parentTwo.childrenField = [];
    arr.push(parentTwo);
    
    var child1 = new Object();
    child1.name = "Child1";
    child1.parentField = parentOne;
    arr.push(child1);
    parentOne.childrenField.push(child1);
    
    var child2 = new Object();
    child2.name = "Child2";
    child2.parentField = parentOne;
    arr.push(child2);
    parentOne.childrenField.push(child2);
    
    var child3 = new Object();
    child3.name = "Child3";
    child3.parentField = parentTwo;
    arr.push(child3);
    parentTwo.childrenField.push(child3);
    
    form.modelMenu.data = arr;
    form.modelMenu.column.field = "name";
    form.modelMenu.parentField = 'parentField';
    form.modelMenu.childrenField = 'childrenField';
    
    model.requery(function () {
        // TODO : place your code here
    });
    
}
