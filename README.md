**Модуль 2: Разработка на стороне клиента
содержание**

Данный тестовый проект состоит из следующих файлов:
3.	WSR_DE_2021_TP_MODULE_2.docx ¬– Задание
4.	WSR_DE_2021_TP_MODULE_2_MEDIA.zip – Медиа файлы
введение
К вам обратилась компания по разработке игр для веб-сайтов. Компания просит помочь в разработке веб-игры. Вам предоставляется вся необходимая верстка. Ваша задача – только клиентское программирование.
Время на выполнение: 1,5ч.
описание проекта и задач

**Экран входа**
При открытии игры должен быть отображен экран входа в игру. 
На данном экране необходимо отобразить изображения предоставляемого транспорта, на котором поедет игрок в процессе игры. Транспорт перечислен в файле cars.json. Информация о транспорте должна получаться из файла при каждом обновлении страницы. Также на этом экране располагается кнопка для начала игры. Эта кнопка должна быть недоступна для нажатия пока игрок не определиться с транспортом, на котором он поедет. Для этого ему необходимо выбрать один из предоставляемых видов транспорта. 
При клике на кнопку входа экран должен смениться на игровой.

**Игровой экран** 
На игровом экране должны отображаться следующая информация:
•	Название выбранной машины
•	Секундомер (начинает считать с 00:00), который должен быть запущен при старте игры
•	Счетчик жизней (при старте у игрока есть 4 жизни). 
Игровое поле – это дорога, на которой находиться машина.
При старте игры машина должна появляться слева из-за границы экрана.
В процессе игры должны появляться препятствия (1 препятствие каждые 2 секунды). Препятствия должны появляться на дороге справа (за границей экрана) и двигаться справа-налево. 
Дорога должна двигаться и отображать процесс движения.
При соприкосновении машины с препятствием счетчик жизней должен уменьшаться.
Машиной можно управлять с помощью кнопок W и S. Кнопка W должна двигать машину вверх, а кнопка S вниз.
Машина не должна выходить за пределы дороги.
Если нажать «пробел», то должен активироваться режим ярости. В этом режиме все препятствия, которые появляются на дороге должны самоуничтожаться. Машина может ехать в режиме ярости только 4 секунды. После этого нужно 5 секунд на восстановление. Постарайтесь визуально отобразить нахождение машины в этом режиме.
Должна быть возможность поставить игру на паузу нажав кнопку ESC. Повторное нажатие должно продолжить игру. Во время паузы все интерактивные действия (анимация, секундомер, препятствия, машина, режим ярости) должны быть приостановлены.
Когда жизни будут равны нулю, то игра должна закончиться и должен отобразиться экран с результатами.



**Экран с результатами**
На экране с результатами необходимо отобразить следующую статистику:
•	Время, которое игрок продержался в игре. 
•	Время, которое игрок провел в режиме ярости. 
•	Время предыдущего игрока.

Если до этого никто не играл. То вместо предыдущего времени необходимо указать «00:00». Время предыдущего игрока должно сохраниться и после перезагрузке страницы.
Если игрок продержался дольше, чем предыдущий, то должно отобразиться сообщение о выигрыше, иначе о проигрыше.
На экране с результатами есть кнопка «Играть сначала» при клике, на которую должен открываться первый экран для выбора машины.
Инструкции для участника
Ваша работа должна быть доступна по адресу: http://xxxxxx-m2.wsr.ru, где xxxxxx – ваш логин
Вы можете использовать библиотеку jQuery.
