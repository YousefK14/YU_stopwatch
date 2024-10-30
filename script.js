<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stylish Stopwatch</title>
    <link href="https://unpkg.com/@primer/css@^20.2.4/dist/primer.css" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="wrapper" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark">
        <div class="container">
            <section class="time-container">
                <p class="time">
                    <span id="minutes">00</span>:<span id="seconds">00</span>:<span id="tens">00</span>
                </p>                
            </section>

            <section title="actions" class="buttons">
                <button class="btn btn-primary" id="button-start">
                    <span>Start</span>
                </button>
                <button class="btn btn-outline" id="button-reset">Reset</button>
            </section>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
