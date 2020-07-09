<!doctype html>
<html lang="en" prefix="op: http://media.facebook.com/op#">
  <head>
    <meta charset="utf-8">
    <link rel="canonical" href="https://front.rap2france.com/{{$article->url}}">
    <meta property="op:markup_version" content="v1.0">
  </head>
  <body>
      <div class="header">
        <h1>{{$article->titre}}</h1>

        <!-- The date and time when your article was originally published -->
        <meta propety="time" class="op-published" datetime="{{$article->created_at}}" />

        <!-- The date and time when your article was last updated -->
        <meta propety="time" class="op-modified" dateTime="{{$article->updated_at}}" />

        <!-- The authors of your article -->
        <address>
          <a rel="facebook" href="http://facebook.com/brandon.diamond">{{$article->Creator->Full_Name}}</a>
        </address>
        <!-- The cover image shown inside your article --> 
          <img src="{{asset($article->Avatar)}}" />

      </div>

      <!-- Article body goes here -->

      <!-- Body text for your article -->

      @foreach(json_decode($article->ContenuFormat['contenu'],true)['blocks'] as $block)


          @if($block['type'] == "paragraph")
            <p>{{$block['data']['text']}}</p>
          @endif
          @if($block['type'] == "quote")
            <blockquote>{{$block['data']['text']}}</blockquote>
          @endif
          @if($block['type'] == "image")
          @if($block['data']['file'])

              <img src="{{$block['data']['file']['url']}}" />
          @else
              <img src="{{$block['data']['url']}}" />
          @endif
          @endif
          @if($block['type'] == "embed")
            @if($block['data']['service'] == "instagram")
          <iframe width="{{$block['data']['width']}}" height="{{$block['data']['height']}}" src="{{$block['data']['embed']}}" frameborder="0"></iframe>

        @endif

        @if($block['data']['service'] == "youtube")
          <iframe width="{{$block['data']['width']}}" height="{{$block['data']['height']}}" src="{{$block['data']['embed']}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        @endif
        @if($block['data']['service'] == "twitter")
          <iframe width="{{$block['data']['width']}}" height="{{$block['data']['height']}}" src="{{$block['data']['embed']}}"  frameborder="0" border="0"></iframe>
        @endif
        @endif
    @endforeach

  </body>
</html>