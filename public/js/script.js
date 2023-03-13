function showEditForm(id) {
  const uniqueId = `edit-form-${id}`;
  const element = $(`#${uniqueId}`);
  element.show();
}

function hideEditForm(id) {
  const uniqueId = `edit-form-${id}`;
  const element = $(`#${uniqueId}`);
  element.hide();
}
