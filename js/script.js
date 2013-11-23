var my = my || {};

$(function(){

    // ToDoItem constructor
    my.ToDoItem = function () {
        var self = this;
        self.toDoItemText = ko.observable();
        self.completed = ko.observable(false); // default value
    };

    my.toDoViewModel = function(){
        var
            itemInputText = ko.observable(),
            toDoList = ko.observableArray([]),
            completedToDoList = ko.computed(function(){
                return _.filter(toDoList(), function(todo){
                    if (todo.completed()) {
                        return todo;
                    }
                });
            }),
            inCompletedToDoList = ko.computed(function(){
                return _.filter(toDoList(), function(todo){
                    if (!todo.completed()) {
                        return todo;
                    }
                });
            }),
            itemsLeft = ko.computed(function(){
                return toDoList().length > 1 ? toDoList().length+" items left" : toDoList().length+" item left";
            }),
            addItem = function() {
                toDoList.push(
                    new my.ToDoItem()
                    .toDoItemText(itemInputText())
                );
                itemInputText("");
            },
            removeToDo = function(todo){
                toDoList.remove(todo);
            };
        return {
            itemInputText: itemInputText,
            itemsLeft: itemsLeft,
            toDoList: toDoList,
            addItem: addItem,
            removeToDo: removeToDo,
            completedToDoList: completedToDoList,
            inCompletedToDoList: inCompletedToDoList
        };
    } ();


    ko.applyBindings(my.toDoViewModel);

});