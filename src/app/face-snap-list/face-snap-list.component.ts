import { Component, OnInit } from '@angular/core';
import { facesnap } from '../models/face-snap.module';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!:facesnap [];
ngOnInit() {
this.faceSnaps = [
  {
    title: 'Archibald',
    description: 'Mon meilleur ami depuis tout petit !',
    imageurl: 'https://img.freepik.com/premium-photo/forest-with-view-ocean-tree-with-ocean-background_910054-17146.jpg?w=360',
    createdate: new Date(),
    snaps: 0
  },
  {
    title: 'three rock mountain',
    description: 'endroit magnifique',
    imageurl: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDg5NzMzOTAvYjQzNGM1ZGU2MWMzMmMxYzdiNzRmYjRmMjQzZTUyMmMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=',
    createdate: new Date(),
    snaps: 0
  },
  {
    title: 'un bon repas',
    description: 'yumm c bon :)',
    imageurl: 'https://media-cdn.tripadvisor.com/media/photo-s/10/06/63/0f/un-bon-repas-mais-des.jpg',
    createdate: new Date(),
    snaps: 0
  }
];
}
}


