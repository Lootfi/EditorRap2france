<!doctype html>
<html lang="en" prefix="op: http://media.facebook.com/op#">
  <head>
    <meta charset="utf-8">
    <link rel="canonical" href="https://front.rap2france.com{{$article->url}}">
    <meta property="op:markup_version" content="v1.0">
  </head>
  <body>
    <article>
    <header>
      <h1>{{$article->titre}}</h1>
      <figure>
      <img src="{{asset($article->Avatar)}}" />
    </figure>

      <time class="op-published" datetime="{{$article->created_at}}">{{$article->created_at}}</time>
      <time class="op-modified" datetime="{{$article->updated_at}}">{{$article->updated_at}}</time>
      <address>
          <a rel="facebook" href="http://facebook.com/Rap2FranceOfficiel/">{{$article->Creator->Full_Name}}</a>
        </address>
    </header>
      <!-- Article body goes here -->

      <!-- Body text for your article -->
      @if($article->ContenuFormat['type'] == 'raw')

        {!! html_entity_decode($article->contenu, ENT_QUOTES, 'UTF-8') !!} 

      @else

      @foreach(json_decode($article->ContenuFormat['contenu'],true)['blocks'] as $block)


          @if($block['type'] == "paragraph")
            <p>{{$block['data']['text']}}</p>
          @endif
          @if($block['type'] == "header")
          <h{{$block['data']['level']}} class="block">{{strip_tags($block['data']['text'])}}</h{{$block['data']['level']}}>

    @endif
    @if($block['type'] == "list")

      @if($block['data']['style'] == "ordered")
      <ol >
        @foreach($block['data']['items'] as $item)
          <li>{{strip_tags($item)}}</li>
        @endforeach
      </ol>
        
      @else
      <ul >
        @foreach($block['data']['items'] as $item)
          <li>{{strip_tags($item)}}</li>
        @endforeach
      </ul>
      @endif

    @endif
          @if($block['type'] == "quote")
            <aside>{{$block['data']['text']}}
            <cite>{{strip_tags($block['data']['caption'])}}</cite>
          </aside>
          @endif
          @if($block['type'] == "image")
          @if($block['data']['file'])
            <figure>
              <img src="{{$block['data']['file']['url']}}" data-fb-disable-360 />
              <figcaption>{{strip_tags($block['data']['caption'])}}</figcaption>
            </figure>
          @else
              <figure>
              <img src="{{$block['data']['url']}}" data-fb-disable-360 />
              <figcaption>{{strip_tags($block['data']['caption'])}}</figcaption>
            </figure>
          @endif
          @endif
          @if($block['type'] == "embed")
            @if($block['data']['service'] == "instagram")
            <figure class="op-interactive">
          <iframe width="{{$block['data']['width']}}" height="{{$block['data']['height']}}" src="{{$block['data']['embed']}}" frameborder="0"></iframe>
            <figcaption>{{strip_tags($block['data']['caption'])}}</figcaption>
        </figure>

        @endif

        @if($block['data']['service'] == "youtube")
        <figure class="op-interactive">
          <iframe width="{{$block['data']['width']}}" height="{{$block['data']['height']}}" src="{{$block['data']['embed']}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <figcaption>{{strip_tags($block['data']['caption'])}}</figcaption>
        </figure>

        @endif
        @if($block['data']['service'] == "twitter")
        <figure class="op-interactive">
          <iframe width="{{$block['data']['width']}}" height="{{$block['data']['height']}}" src="{{$block['data']['embed']}}"  frameborder="0" border="0"></iframe>
          <figcaption>{{strip_tags($block['data']['caption'])}}</figcaption>
        </figure>
        @endif
        @endif

    @endforeach
      @endif
      
</article>
</body>
</html>