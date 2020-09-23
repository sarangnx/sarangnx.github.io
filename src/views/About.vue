<template>
    <div class="curvy-bg">
        <div class="about col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>About Me</h1>
            <p>
                I am a full stack developer, who started out the journey of web development with
                <a href="https://www.php.net/" title="php" target="_blank">php</a> during college days. I always loved,
                and enjoyed using javascript, both
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    title="Just plain old javascript with a fancy name to sound cool and confuse people."
                    target="_blank"
                >
                    vanilla
                </a>
                and <a href="https://jquery.com/" title="Rikudō Sennin" target="_blank">jQuery</a>, despite the
                mysterious and baffling behaviours like - <span class="code">0.1 + 0.2 = 0.30000000000000004</span>,
                <span class="code">'1' + 1 = '11'</span> but <span class="code">'1' - 1 = 0</span>,
                <span class="code">'b' + 'a' ++ 'a' + 'a' = 'baNaNa'</span> and numerous other
                <a href="https://github.com/denysdovhan/wtfjs" title="🤯" target="_blank">crazy issues</a>
                that are not found in any other languages.
            </p>
            <p>
                But when I heard about writing server side code with JS, I pulled the plug on php and embraced
                <a href="https://nodejs.org/en/" title="awesomeness" target="_blank">Node.js</a>.
            </p>
            <p>
                Being a CS graduate who pushed himself to learn more about new technologies, I am a
                <i>“Jack of All Trades and Master of Some”.</i>
            </p>
            <p class="m-0">
                Apart from coding all day and night, anime, games and memes are what touches my soul.
            </p>
        </div>
    </div>
</template>

<style lang="scss">
.about {
    h1 {
        font-weight: bold;
    }

    p {
        line-height: 2em;
        white-space: wrap;
        span.code {
            white-space: nowrap;
            background: #313131;
            padding: 0.1em 0.4em;
        }
        a {
            color: #1be66c;
            white-space: nowrap;
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
