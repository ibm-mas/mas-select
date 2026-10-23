# Embedding IBM Mediacenter videos

Standard pattern for the help center. Every video uses the same three parts, so pages look the same and the content still works if the embed does not.

## The pattern

Paste this where the video should appear. Replace the three values in capitals.

```html
<div class="video-embed" markdown="1">
<iframe src="EMBED_URL_FROM_MEDIACENTER" title="SHORT DESCRIPTIVE TITLE" allowfullscreen loading="lazy"></iframe>
</div>
<p class="video-caption">SHORT DESCRIPTIVE TITLE (about 2 minutes). <a href="MEDIACENTER_PAGE_URL">Watch on IBM Mediacenter</a>. <a href="#TRANSCRIPT_ANCHOR">Read the transcript</a>.</p>
```

Then add the transcript lower on the page, under a heading such as `## Video transcript`, so search finds it and the video is accessible to everyone.

## Rules

0. **Place the video above the fold.** Put it directly after the intro paragraph(s), before "Tips for success" and the steps. Pages with videos get more views, so readers should see the video without scrolling. Put the transcript lower on the page, not next to the video.
1. **Get the embed URL from Mediacenter.** Use the share or embed option on the video's page and copy the `src` of the iframe it gives you. Do not guess the URL format.
2. **Always set `title`.** Screen readers announce it. Describe what the video shows, not just its name.
3. **No autoplay.** Do not add `autoplay` to the URL.
4. **Captions come from Mediacenter.** Confirm the captions are on before you embed.
5. **Always keep the text link.** It is the fallback for PDF export (iframes print as empty boxes), blocked iframes, and a later port to IBM Docs.
6. **Always add the transcript.** Put it on the same page.
7. **One short video per task**, about two minutes or less.
8. **Do not replace the text.** A video supports the page. The page must still make sense without it.
9. **Respect the content rules for the apps.** A tour of the experience is fine. Do not turn the video into the only step-by-step instructions, and do not describe the apps as needing no instructions.

## French

The French site uses the same video unless a French version exists. Until then, add a line under the caption in the French page: that the video is in English, with captions. Decide with the translation owner whether to request French captions or a re-recorded video.

## Checklist before publishing a page with a video

- [ ] Embed URL copied from Mediacenter
- [ ] Iframe has a descriptive `title`
- [ ] Captions are on in Mediacenter
- [ ] Caption line has the "Watch on IBM Mediacenter" link
- [ ] Transcript is on the page and linked
- [ ] The page works without the video
- [ ] `mkdocs build -d /tmp/mas-site-test` shows no warnings
- [ ] Open the built page and confirm the video plays, is 16:9, and fits on a narrow screen

## Open questions

- Does the IBM Docs platform play embedded Mediacenter content? See item 15 in [ibm-docs-customization-gap.md](ibm-docs-customization-gap.md).
- Is a cookie or privacy notice required for the Mediacenter embed? Check with the legal or privacy owner.
- Can Mediacenter embeds be allowed from the GitHub Pages site (`ibm-mas.github.io`)? Some hosts restrict embedding by domain. Test with one real video first.
