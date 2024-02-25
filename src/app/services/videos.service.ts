import { Injectable } from '@angular/core';
import { VideoLibrary } from '../models/videoLibrary';
import { VideoData } from '../models/videoData';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }

  public getVideoFolders(): any{
    const ELEMENT_DATA: VideoLibrary[] = [
      { id: 1, name: 'Afiliado Master', videos: 8, size: '7.3 GB', date: '30/May/2023' },
      { id: 2, name: 'BeMaster', videos: 21, size: '1.3 GB', date: '30/May/2023' },
      { id: 3, name: 'Comizzión', videos: 10, size: '284 MB', date: '30/May/2023' },
      { id: 4, name: 'Creador de contenido', videos: 2, size: '4.3 GB', date: '30/May/2023' },
      { id: 5, name: 'Exportados Wil', videos: 15, size: '500 GB', date: '30/May/2023' },
      { id: 6, name: 'Afiliado Master', videos: 6, size: '7.3 GB', date: '30/May/2023' },
      { id: 7, name: 'BeMaster', videos: 30, size: '1.4 GB', date: '30/May/2023' }
    ];
    return ELEMENT_DATA;
  }

  public getVideosInFolder(folderId: number):any{
  const LIST_VIDEO_DATA: VideoData[] = [
    { id: 1, idVideo: 2, name: 'Entrenamiento.mp4', size: '7.3 GB', time: '04:11:37', date: '30/may/2023' },
    { id: 2, idVideo: 2, name: 'Salida-al-mercado-versión nueva.mp4', size: '1.4 GB', time: '47:55', date: '22/jun/2022' },
    { id: 3, idVideo: 2, name: 'Como-cerrar-una-ventana.mp4', size: '284 MB', time: '10:12', date: '11/sep/2021' },
    { id: 4, idVideo: 2, name: 'Crea-un-ticket-valioso.mp4', size: '4.3 GB', time: '03:50:22', date: '21/jun/2023' },
    { id: 5, idVideo: 2, name: 'Conquista-el-mercado-digital.mp4', size: '500 MB', time: '5:00', date: '5/abr/2023' },
    { id: 6, idVideo: 2, name: 'Entrenamiento.mp4', size: '7.3 GB', time: '04:11:37', date: '30/may/2023' },
    { id: 11, idVideo: 1, name: 'Entrenamiento.mp4', size: '7.3 GB', time: '04:11:37', date: '30/may/2023' },
    { id: 12, idVideo: 2, name: 'Salida-al-mercado-versión nueva.mp4', size: '1.4 GB', time: '47:55', date: '22/jun/2022' },
    { id: 13, idVideo: 3, name: 'Como-cerrar-una-ventana.mp4', size: '284 MB', time: '10:12', date: '11/sep/2021' },
  ]
  const videosWithId = LIST_VIDEO_DATA.filter((video) => video.idVideo === folderId);
  console.log(videosWithId);

  return videosWithId;

  }

}
