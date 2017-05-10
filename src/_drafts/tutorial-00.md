extends: default.liquid

title: "Creating a window"
date: 05 Mar 2017 21:00:00 +0100
path: articles/:category/:subcategory/:year/:month/creating-a-window.html
route: articles
description: "GFX is a graphical layer between graphical devices without being dependent on a certain device."
thumbnail: /assets/triangle.png
category: tutorials
subcategory: gfx
tags: [gfx, graphics]
---

The first thing we need to do to create stunning graphics is to create a graphics device and an application window to draw in.

Luckily, there are quite a few libraries out there that already provide the functionality we seek. These libraries save us all the operation-system specific work and give use a window and an Graphics context to render in. The libraries supported by gfx are:

* winit
* glutin
* glfw
* SDL

In this tutorial we will only be using winit and glutin which are written in pure Rust. We need to use winit for creating a window with a dxgi device and glutin for creating a window with an OpenGL device.

# cargo.toml

The dependencies that we will be using, need to be added to the *cargo.toml* file:

``` toml
[dependencies]
gfx = "0.13.0"
# OpenGL
gfx_window_glutin = "0.13"
glutin = "0.7.1"
# Direct3D
gfx_window_dxgi = "0.6.0"
winit = "0.5.1"
```

# Adding our crates

Create a new project and add the following crates to your *main.rs*.
For setting up a window with Direct3D/OpenGL context, we need:

``` rust
// Direct3D
extern crate gfx; // gfx
extern crate gfx_window_dxgi; // For creating the Direct3D context.
extern crate winit; // For creating the window with winit.

// OpenGL
extern crate gfx; // gfx
extern crate gfx_window_glutin; // For creating the OpenGL context.
extern crate glutin; // For creating the window with glutin.
```

We create a the main function where we will instantiate the window object. The window object holds all the windowing data:

``` rust
// Direct3D
pub fn main() {
  let builder = winit::WindowBuilder::new() // Create a new window object with winit.
      .with_title("Winit Window") // Set the title of the window.
      .with_dimensions(1024, 768); // Set the window dimensions.
}

// OpenGL
pub fn main() {
  let builder = glutin::WindowBuilder::new() // Create a new window object with glutin.
      .with_title("Glutin Window") // Set the title of the window.
      .with_dimensions(1024, 768); // Set the window dimensions.
}
```

If we didn't set the title and dimensions of the window, it would be set to the default values.

# Initialize your window with gfx

When we initialize our context, we need to specifie our *ColorFormat* and our *DepthFormat*. We create our context by passing our created window object ownerschip to init function:

``` rust
// Direct3D
...
// Specifie the ColorFormat as Standard 8bits RGBA format.
pub type ColorFormat = gfx::format::Rgba8;
// Specifie the DepthFormat as Standard 24-bit depth format with 8-bit stencil.
pub type DepthFormat = gfx::format::DepthStencil;

pub fn main() {
  ...
  let (window, mut device, mut factory, main_color) =
        gfx_window_dxgi::init::<ColorFormat>(builder)
        .unwrap();
}

// OpenGL
...
// Specifie the ColorFormat as Standard 8bits RGBA format.
pub type ColorFormat = gfx::format::Rgba8;
// Specifie the DepthFormat as Standard 24-bit depth format with 8-bit stencil.
pub type DepthFormat = gfx::format::DepthStencil;

pub fn main() {
  ...
  let (window, mut device, mut factory, main_color, _main_depth) =
      gfx_window_glutin::init::<ColorFormat, DepthFormat>(builder);
}
```

The framebuffer size is set to the height and width of the window during initialization. Also the context of our window is set on the current thread, so we don't have to do it ourselves.

# Drawing and events

We don't want the application to draw a single image and then immediately quit and close the window. We want the application to keep drawing images and handling user input until the program has been explicity to do so. For this reason we have to create a loop, that keeps on running until we press escape or close the window.

``` rust
// Direct3D
pub fn main() {
  ...
  'main: loop {
        // events for this window.
        for event in window.poll_events() {
            match event {
                // When escape is pressed.
                winit::Event::KeyboardInput(_,_, Some(winit::VirtualKeyCode::Escape)) |
                // When we close the window.
                winit::Event::Closed => break 'main,
                _ => {},
            }
        }
        window.swap_buffers().unwrap();
    }
}

// OpenGL
pub fn main() {
  ...
  'main: loop {
        // events for this window.
        for event in window.poll_events() {
            match event {
                // When we close the window.
                glutin::Event::Closed => break 'main,
                _ => {},
            }
        }
        window.swap_buffers().unwrap();
    }
}
```

`window.poll_events()` checks if any events are triggerd (like keyboard input or mouse movement events). In our loop we then match the events of our window for when it was instructed to close, if we matched an event then we stop the loop. `window.swap_buffers()` will swap the color buffer (a large buffer that contains color values of each pixel in the window) that has been used to draw in during this iteration and show it as ouput to the screen.

> __Double buffer__
When an application draws in a single buffer the resulting image might display flickering issues. This is because the resulting output image is not drawn in an instant, but drawn pixel by pixel and usually from left to right and top to bottom. Because these images are not displayed at an instant to the user, but rather via a step by step generation the result may contain quite a few artifacts. To circumvent these issues, windowing applications apply a double buffer for rendering. The front buffer contains the final output image that is shown at the screen, while all the rendering commands draw to the back buffer. As soon as all the rendering commands are finished we swap the back buffer to the front buffer so the image is instantly displayed to the user, removing all the aforementioned artifacts.

# The window

Now try to compile your application and if everything wetn well you should see the following output:

If it's a very dull and boring black image, you did things right!  If you didn't get the right image or you're confused as to how everything fits together, check the full source code [here].

# Input

We also want to have some form of input control with our window and we achieve this by using the Event enum. When we want the user to interact with the keyboard, we use `Event::KeyboardInput(KeyState, _, KeyCode)`. For the mouse `Event::MouseInput(MouseState)`. To match for these events we need to add it to our match:

``` rust
// Direct3D
...
    match event {
        // When escape is pressed/released on the keyboard.
        winit::Event::KeyboardInput(_,_, Some(winit::VirtualKeyCode::Escape)) |
        // When we close the window.
        winit::Event::Closed => break 'main,
        _ => {},
}

// OpenGL
...
    match event {
        // When escape is pressed/released on the keyboard.
        glutin::Event::KeyboardInput(_,_, Some(glutin::VirtualKeyCode::Escape)) |
        // When we close the window.
        glutin::Event::Closed => break 'main,
        _ => {},
    }
```

Now we check if the escape key was pressed/released, we close our window by `break 'main`.

# Rendering

We want to place all rendering commands in the loop, since we want to execute all the rendering commands each iteration of the loop. This would look a bit like this:

``` rust
// Direct3D
pub fn main() {
  ...
  'main: loop {
        // Check and match events.
        for event in window.poll_events() {
            match event {
                winit::Event::KeyboardInput(_,_, Some(winit::VirtualKeyCode::Escape)) |
                winit::Event::Closed => break 'main,
                _ => {},
            }
        }

        // Rendering commands here.
        ...

        // Swap the buffers.
        window.swap_buffers().unwrap();
    }
}

// OpenGL
pub fn main() {
  ...
  'main: loop {
        // Check and match events.
        for event in window.poll_events() {
            match event {
                glutin::Event::KeyboardInput(_,_, Some(glutin::VirtualKeyCode::Escape)) |
                glutin::Event::Closed => break 'main,
                _ => {},
            }
        }

        // Rendering commands here.
        ...

        // Swap the buffers.
        window.swap_buffers().unwrap();
    }
}
```

Just to test if things actually work we want to clear the screen with a color of our choice. At the start of each render iteration we always want to clear the screen otherwise we would still see the results from the previous iteration (this could be the effect you're looking for, but usually you don't). We want to clear the screen's color buffer using the encoder with the `clear()` method.
