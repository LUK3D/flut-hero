import { Color, Colors } from "@luk3d/flutjs/dist/painting/colors.js";
import { AbsoluteUnits } from "@luk3d/flutjs/dist/rendering/mesurementes.js";
import { Widget } from "@luk3d/flutjs/dist/widgets/index.js";

function academicCap(args: { color?: Color; size?: number }) {
  if (!args.size) {
    args.size = 32;
  }

  var icon = new Widget({
    tagName: "div",
    width: args.size,
    height: args.size,
    width_size_measurement_unit:AbsoluteUnits.pixels,
    height_size_measurement_unit:AbsoluteUnits.pixels
  });
  icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>`;

  icon.css!._props.color = (args.color ?? Colors.White).value;
  icon.css!.apply(icon);

  return icon;
}
function adjustments(args: { color?: Color; size?: number }) {
  if (!args.size) {
    args.size = 32;
  }
  var icon = new Widget({
    tagName: "div",
    width: args.size,
    height: args.size,
    width_size_measurement_unit:AbsoluteUnits.pixels,
    height_size_measurement_unit:AbsoluteUnits.pixels
  });
  icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>`;

  icon.css!._props.color = (args.color ?? Colors.White).value;
  icon.css!.apply(icon);

  return icon;
}
function annotation(args: { color?: Color; size?: number }) {
  if (!args.size) {
    args.size = 32;
  }
  var icon = new Widget({
    tagName: "div",
    width: args.size,
    height: args.size,
    width_size_measurement_unit:AbsoluteUnits.pixels,
    height_size_measurement_unit:AbsoluteUnits.pixels
  });
  icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
</svg>`;

  icon.css!._props.color = (args.color ?? Colors.White).value;
  icon.css!.apply(icon);

  return icon;
}
function archive(args: { color?: Color; size?: number }) {
  if (!args.size) {
    args.size = 32;
  }
  var icon = new Widget({
    tagName: "div",
    width: args.size,
    height: args.size,
    width_size_measurement_unit:AbsoluteUnits.pixels,
    height_size_measurement_unit:AbsoluteUnits.pixels
  });
  icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
</svg>`;

  icon.css!._props.color = (args.color ?? Colors.White).value;
  icon.css!.apply(icon);

  return icon;
}

function arrowCircleDown(args: { color?: Color; size?: number }) {
  if (!args.size) {
    args.size = 32;
  }
  var icon = new Widget({
    tagName: "div",
    width: args.size,
    height: args.size,
    width_size_measurement_unit:AbsoluteUnits.pixels,
    height_size_measurement_unit:AbsoluteUnits.pixels
  });
  icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
</svg>`;

  icon.css!._props.color = (args.color ?? Colors.White).value;
  icon.css!.apply(icon);

  return icon;
}


function arrowCircleLeft(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
  
    return icon;
  }


  function arrowCircleRight(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function arrowCircleUp(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function arrowDown(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  
  function arrowLeft(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function arrowNarrowDown(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function arrowNarrowLeft(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function arrowNarrowRight(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  
  function arrowNarrowUp(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  
  function arrowRight(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }
 
  function arrowSmDown(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


   
  function arrowSmLeft(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


   
  function arrowSmRight(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


   
  function arrowSmUp(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }

  function arrowUp(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }

  function arrowsExpand(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function atSymbol(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function backspace(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }

  function badgeCheck(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function ban(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function beaker(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function bell(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function bookOpen(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function bookmarkAlt(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function bookmark(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function briefcase(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function cake(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function calculator(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function calendar(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function camera(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function cash(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function chartBar(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function chartPie(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function chartSquareBar(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function chatAlt2(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function chatAlt(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function chat(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function checkCircle(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }

  function check(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function chevronDoubleDown  (args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function chevronDoubleLeft
  (args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function chevronDoubleRight(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }

  function chevronDoubleUp(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function chevronDown(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function chevronLeft(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function chevronRight(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function chevronUp(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function chip(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function clipboardCheck(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function clipboardCopy(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }




  function clipboardList(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function clipboard(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function clock(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function cloudDownload(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function cloudUpload(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }




  function cloud(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function code(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function cog(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function collection(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function colorSwatch(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function creditCard(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }



  function cubeTransparent(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }

  function cube(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }

  function currencyBangladeshi(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }

  function currencyDollar(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }

  function currencyEuro(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }
  function currencyPound(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function currencyRupee(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function currencyYen(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function cursorClick(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function database(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function desktopComputer(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }


  function deviceMobile(args: { color?: Color; size?: number }) {
    if (!args.size) {
      args.size = 32;
    }
    var icon = new Widget({
      tagName: "div",
      width: args.size,
      height: args.size,
      width_size_measurement_unit:AbsoluteUnits.pixels,
      height_size_measurement_unit:AbsoluteUnits.pixels
    });
    icon.tag!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>`;
  
    icon.css!._props.color = (args.color ?? Colors.White).value;
    icon.css!.apply(icon);
    return icon;
  }






export { 
    academicCap, 
    adjustments ,
    arrowCircleDown,
    annotation,
    archive,
    arrowCircleLeft,
    arrowCircleRight,
    arrowCircleUp,
    arrowDown,
    arrowLeft,
    arrowNarrowDown,
    arrowNarrowLeft,
    arrowNarrowRight,
    arrowNarrowUp,
    arrowRight,
    arrowSmDown,
    arrowSmLeft,
    arrowSmRight,
    arrowSmUp,
    arrowUp,
    arrowsExpand,
    atSymbol,
    backspace,
    badgeCheck,
    ban,
    beaker,
    bell,
    bookOpen,
    bookmark,
    bookmarkAlt,
    briefcase,
    cake,
    calculator,
    calendar,
    camera,
    cash,
    chartBar,
    chartPie,
    chartSquareBar,
    chat,
    chatAlt,
    chatAlt2,
    check,
    checkCircle,
    chevronDoubleDown,
    chevronDoubleLeft,
    chevronDoubleRight,
    chevronDoubleUp,
    chevronDown,
    chevronLeft,
    chevronRight,
    chevronUp,
    chip,
    clipboard,
    clipboardCheck,
    clipboardCopy,
    clipboardList,
    clock,
    cloud,
    cloudDownload,
    cloudUpload,
    code,
    cog,
    collection,
    colorSwatch,
    creditCard,
    cube,
    cubeTransparent,
    currencyBangladeshi,
    currencyDollar,
    currencyEuro,
    currencyPound,
    currencyRupee,
    currencyYen,
    cursorClick,
    database,
    desktopComputer,
    deviceMobile,

};
