gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Draggable);

let previousScroll = 0;

ScrollTrigger.create({
    trigger: "body",              
    start: "top top",              
    end: "bottom bottom",           
    onUpdate: (self) => {
        let currentScroll = self.scroll(); 
        
        if (currentScroll > previousScroll) {
            
            gsap.to("header", { y: -200, duration: 0.5, ease: "power2.out" });
        } else {
            
            gsap.to("header", { y: 0, duration: 0.5, ease: "power2.out" });
        }
        
        previousScroll = currentScroll; 
    },
});



gsap.from("header", {
    y: -200,
    opacity: 0,
    duration:1,
});

gsap.timeline() 
    .fromTo(".ship-info", 
    { scaleY: 0 },
{   scaleY: 1,     
    delay: 0.5,
    duration: 1,   
    ease: "power2.out"  
})
.from(".ship-name", {
    delay: -0.4,
    opacity: 0,
    duration: 1,
    x: 60,
})
.from(".ship-launch", {
    delay: -0.5,
    opacity: 0,
    duration: 1,
})
.from(".launch-year", {
    delay: -0.8,
    opacity: 0,
    duration: 1,
    x: -60,
})
.from(".home-button", {
    opacity: 0,
    duration: 1,
    y: 100,
    ease: "circ",
});

const abouttimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#about", 
        start: "top 75%", 
        toggleActions: "play none none none" 
    }
});

abouttimeline
.from(".about-title", {
    opacity: 0, 
    duration: 1, 
    x: -100,  
    })
.from("#p1", {
    delay: -0.35,
    opacity: 0,
    duration: 0.7,
    y: 50,
    ease: "power2",
    }) 
.from("#p2", {
    delay: -0.35,
    opacity: 0,
    duration: 0.7,
    y: 50,
    ease: "power2",
    }) 
.from("#p3", {
    delay: -0.35,
    opacity: 0,
    duration: 0.7,
    y: 50,
    ease: "power2",
    })
.from(".marko-img", {
    delay: -0.35,
    opacity: 0,
    duration: 0.7,
    y: 100, 
    });


const anvincibletimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#anvincible", 
        start: "top 75%", 
        toggleActions: "play none none none" 
        }
});

anvincibletimeline
.from(".anvincible-title", {
    opacity: 0, 
    duration: 0.8, 
    y: 100,
})
.from("#p4", {
    delay: -0.4,
    opacity: 0,
    duration: 0.7,
    x: -50,
    ease: "power2",
}) 
.from("#p5", {
    delay: -0.35,
    opacity: 0,
    duration: 0.7,
    x: -50,
    ease: "power2",
}) 
.from("#li1", {
    delay: -0.25,
    opacity: 0,
    duration: 0.5,
    x: -100,
    ease: "power4",
})
.from("#li2", {
    delay: -0.25,
    opacity: 0,
    duration: 0.5,
    x: -100,
    ease: "power4",
})
.from("#li3", {
    delay: -0.25,
    opacity: 0,
    duration: 0.5,
    x: -100,
    ease: "power4",
})
.from("#li4", {
    delay: -0.25,
    opacity: 0,
    duration: 0.5,
    x: -100,
    ease: "power4",
})
.from(".anvincible-img", {
    delay: -0.1,
    opacity: 0,
    duration: 0.5,
})
.from(".anvincible-button", {
    delay: -0.6,
    opacity: 0,
    duration: 1,
    y: 100,
    ease: "circ",
});


const contacttimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact", 
        start: "top 75%", 
        toggleActions: "play none none none" 
        }
});

contacttimeline
.from(".contact-title", { 
    y: 100, 
    opacity: 0,
    duration: 0.8,   
})
.from(".first-name", {
    delay: -0.4,
    opacity: 0,
    duration: 0.5,
    x: -100,
    ease: "power3",
})
.from(".last-name", {
    delay: -0.25,
    opacity: 0,
    duration: 0.5,
    x: 100,
    ease: "power3",
})
.from(".e-mail", {
    delay: -0.25,
    opacity: 0,
    duration: 0.5,
    x: -100,
    ease: "power3",
})
.from(".phone-number", {
    delay: -0.25,
    opacity: 0,
    duration: 0.5,
    x: 100,
    ease: "power3",
})
.from(".message", {
    delay: -0.25,
    opacity: 0,
    duration: 1,
    ease: "power3",
})
.from(".send-button", {
    delay: -0.7,
    opacity: 0,
    duration: 1,
    y: 100,
    ease: "circ",
});
