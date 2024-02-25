import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { VideoData } from '../../models/videoData';
import { VideoLibrary } from '../../models/videoLibrary';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {
  public filterTbl:boolean=true;
  public itemSelect:string="";

  public displayedColumns: string[] = []; // Inicializar directamente
  public videosLibrary: VideoLibrary[] = [];
  public dataSource = new MatTableDataSource<VideoLibrary>();

  public selection: SelectionModel<VideoLibrary> = new SelectionModel<VideoLibrary>(true, []);
  
  public displayedColumnsFiltered: string[] = [];
  public videosData: VideoData[] = [];
  public selectionFilter: SelectionModel<VideoData> = new SelectionModel<VideoData>(true, []);

  constructor(private videoService: VideosService) { }

  ngOnInit(): void {
    this.videosLibrary = this.videoService.getVideoFolders();
    this.displayedColumns = ['select', 'name', 'videos', 'size', 'date'];
    this.dataSource = new MatTableDataSource<VideoLibrary>(this.videosLibrary);
    this.displayedColumnsFiltered=['select', 'name', 'size', 'time', 'date'];
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  selectItem(row: VideoLibrary) {
    this.videosData = this.videoService.getVideosInFolder(row.id);
    this.itemSelect = row?.name || 'name';
    this.filterTbl = !this.filterTbl;    
  }

  backList(){
    this.filterTbl = !this.filterTbl;      
    this.selection.clear();
  }

  
}
