{
    // Основная функция
    function changeOutputPathForAll() {
        var proj = app.project;
        var renderQueue = proj.renderQueue;

        if (renderQueue.numItems === 0) {
            alert("The rendering queue is empty!");
            return;
        }

        // Запрашиваем у пользователя новую папку для сохранения
        var newFolder = Folder.selectDialog("Select a folder to save the renderers to");
        if (!newFolder) return; // Если пользователь отменил выбор

        // Проходим по всем элементам в Render Queue
        for (var i = 1; i <= renderQueue.numItems; i++) {
            var renderItem = renderQueue.item(i);
            var outputModule = renderItem.outputModule(1); // Используем первый Output Module

            // Получаем текущее имя файла
            var currentFile = outputModule.file;
            if (currentFile) {
                var newFilePath = new File(newFolder.fsName + "/" + currentFile.name);
                outputModule.file = newFilePath; // Устанавливаем новый путь
            }
        }

        alert("The save folder has been changed for all compositions in the rendering queue\nt.me/mohonovschannel");
    }

    // Запуск скрипта
    changeOutputPathForAll();
}