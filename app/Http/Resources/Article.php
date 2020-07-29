<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Article extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [

            'Avatar' => $this->Avatar,
            'titre' => $this->titre,
            'tag' => $this->tag,
            'Category' => $this->Category->nom,
            'Creator' => ['name' => $this->Creator->Full_Name, 'email' => $this->Creator->email], 
            'created_at' => $this->created_at,
            'CreatedAtAgo' => $this->CreatedAtAgo,
            'StatusName' => $this->StatusName,
            'ContentType' => $this->ContenuFormat['type']


        ];
    }
}
