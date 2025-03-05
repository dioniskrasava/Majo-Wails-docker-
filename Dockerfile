# Используем актуальный образ Go (1.23 или выше)
FROM golang:1.24


RUN apt-get update && apt-get install -y \
    libgtk-3-dev \
    libwebkit2gtk-4.0-dev \
    gcc \
    pkg-config \
    curl \
    xauth \
    x11-apps

# Устанавливаем Node.js и npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Устанавливаем Wails CLI
RUN go install github.com/wailsapp/wails/v2/cmd/wails@latest

# Копируем исходный код проекта в контейнер
WORKDIR /app
COPY . .

# Собираем проект
RUN wails build

# Запускаем приложение
CMD ["./build/bin/MyAppWails1"]