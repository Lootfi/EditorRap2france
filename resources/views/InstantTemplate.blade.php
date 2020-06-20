<!doctype html>
<html lang="en" prefix="op: http://media.facebook.com/op#">
  <head>
    <meta charset="utf-8">
    <link rel="canonical" href="{{$article->url}}">
    <meta property="op:markup_version" content="v1.0">
  </head>
  <body>
    <article>
      <header>
        <h1>{{$article->titre}}</h1>

        <!-- The date and time when your article was originally published -->
        <time class="op-published" datetime="${{$article->created_at}}">{{$article->created_at}}</time>

        <!-- The date and time when your article was last updated -->
        <time class="op-modified" dateTime="${{$article->updated_at}}">{{$article->updated_at}}</time>

        <!-- The authors of your article -->
        <address>
          <a rel="facebook" href="http://facebook.com/brandon.diamond">{{$article->Creator->Full_Name}}</a>
        </address>
        <!-- The cover image shown inside your article --> 
        <figure>
          <img src="{{asset($article->Avatar)}}" />
          <figcaption>This is a caption of the avatar</figcaption>
        </figure>   

      </header>

      <!-- Article body goes here -->

      <!-- Body text for your article -->

      @foreach($article->ContenuFormat['contenu']['blocks'] as $block)


          @if($block['type'] == "paragraph")
            <p>{{$block['data']['text']}}</p>
          @endif
          @if($block['type'] == "quote")
            <blockquote>{{$block['data']['text']}}</blockquote>
          @endif
          @if($block['type'] == "image")
          @if($block['data']['file'])

              <img src="{{$block['data']['file']['url']}}" />
              <figcaption>{{$block['data']['caption']}}</figcaption>
          @else
              <img src="{{$block['data']['url']}}" />
              <figcaption>{{$block['data']['caption']}}</figcaption>
          @endif
          @endif
          @if($block['type'] == "embed")
            @if($block['data']['service'] == "instagram")
        <figure class="op-interactive">
          <iframe width="{{$block['data']['width']}}" height="{{$block['data']['height']}}" src="{{$block['data']['embed']}}" frameborder="0"></iframe>
          <figcaption>{{$block['data']['caption']}}</figcaption>

        </figure>
        @endif

        @if($block['data']['service'] == "youtube")
        <figure class="op-interactive">
          <iframe width="{{$block['data']['width']}}" height="{{$block['data']['height']}}" src="{{$block['data']['embed']}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <figcaption>{{$block['data']['caption']}}</figcaption>

        </figure>
        @endif
        @if($block['data']['service'] == "twitter")
        <figure class="op-interactive">
          <iframe width="{{$block['data']['width']}}" height="{{$block['data']['height']}}" src="{{$block['data']['embed']}}"  frameborder="0" border="0"></iframe>
          <figcaption>{{$block['data']['caption']}}</figcaption>

        </figure>
        @endif
        @endif
    @endforeach

    </article>
  </body>
</html>