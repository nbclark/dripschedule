DripScheduler.TodosNewController = Ember.ObjectController.extend(DripScheduler.TodoModalMixin, {
	actions: {
		save: function (modal) {
			var controller = this,
				person = this.get('model');

			person.save().then(function () {
				controller.closeModal(modal);
			});
		},

		cancel: function (modal) {
			var person = this.get('model');

			person.deleteRecord();

			this.closeModal(modal);
		}
	}
});

