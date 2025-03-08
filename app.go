package main

import (
	"context"
	"fmt"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup вызывается при запуске приложения. Контекст сохраняется
// таким образом, мы можем вызывать методы среды выполнения
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// // Great возвращает приветствие для данного имени
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
