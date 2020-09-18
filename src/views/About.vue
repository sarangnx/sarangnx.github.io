<template>
    <div class="about col-12 col-sm-8 col-lg-5 mt-5 mx-auto">
        <h1>About Me</h1>
        <p>
            I am a full stack developer, who started out in php. I am a person
            who loves javascript despite issues like -
            <span class="code">0.1 + 0.2 = 0.30000000000000004</span>,
            <span class="code">'1' + 1 = '11'</span> but
            <span class="code">'1' - 1 = 0</span>,
            <span class="code">'b' + 'a' ++ 'a' + 'a' = 'baNaNa'</span> and
            numerous other crazy issues that are not in any other languages.
            When I heard about writing server side code with JS, I ditched php
            for good and took on Node.js.
        </p>
        <p>
            Being a CS graduate who pushed himself to learn more about new
            technologies, I am a “Jack of All Trades and Master of Some”.
        </p>
        <p>
            Apart from coding all day and night, anime, games and memes are what
            touches my soul.
        </p>
    </div>
</template>

<style lang="scss">
.about {
    h1 {
        font-weight: bold;
    }
    &::before {
        content: '';
        background: url('/img/curvybg-1.svg');
        position: fixed;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        left: 0px;
        top: 0px;
        background-position: bottom;
        background-size: contain;
        z-index: -1;
    }

    p {
        line-height: 2em;
        span.code {
            white-space: nowrap;
            background: #313131;
            padding: 0.1em 0.4em;
        }
    }
}

// to keep svg above bottom nav in mobile-view
.mobile-view {
    .about::before {
        background-position: 0px calc(100% - 60px);
    }
}
</style>
