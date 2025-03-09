package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Создаем экземпляр приложения
	app := NewApp()

	// Настройки приложения
	err := wails.Run(&options.App{
		Title:     "MyAppWails1",
		Width:     500, // Начальная ширина окна
		Height:    300, // Начальная высота окна
		MinWidth:  500, // Минимальная ширина окна
		MinHeight: 300, // Минимальная высота окна
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
