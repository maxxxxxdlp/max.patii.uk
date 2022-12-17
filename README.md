# max.patii.uk

> This branch contains my final project for the BLAW 302 class at KU in
> Fall 2022.
> The project is a blog post that analyzes the Students for Fair Admissions v.
> President and Fellows of Harvard College supreme court case and offers
> commentary
>
> It is available at `/projects/students-for-fair-admissions`

Source code for [https://max.patii.uk](https://max.patii.uk).

I am a huge fan of tacking minimalism to its extreme, so here is how my home
page looks like:

![Main Page](./docs/src/mainPage.png)

That's right, there are no cluttered submenus, no useless footers and no
unnecessary information.

This site is primarily used as my portfolio, though it can also host random JS
projects (check out my [Tetris Game](https://max.patii.uk/projects/tetris)).

The design was inspired by
[Clement Grellier's portfolio](https://clementgrellier.fr/).

## Development

```zsh
npm i       # install dependencies
npm run dev # start development server
```

This would start the development server at
[http://locahlost:3000](http://locahlost:3000).

## Production

```zsh
npm i         # install dependencies
npm run build # begin the build process
npm run start # start production server
```

This would start the production server at
[http://locahlost:3000](http://locahlost:3000).

Afterward, you can deploy this site at [https://vercel.com](https://vercel.com).

Alternatively, you can configure a reverse proxy (e.x Nginx) that would handle
the SSL certificate and forward the requests to port 80, which should be made
externally available.
