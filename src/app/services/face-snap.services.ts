import { Injectable } from '@angular/core';
 import { facesnap } from '../models/face-snap.module';
 import { OnInit } from '@angular/core';
 @Injectable({
 providedIn: 'root'
 })
 export class FaceSnapsService {
 faceSnaps: facesnap[] = [
          {
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageurl: 'https://www.1zoom.me/prev/322/321100.jpg',
            createdate: new Date(),
            snaps: 0
          },
          {
            title: 'three rock mountain',
            description: 'endroit magnifique',
            imageurl: 'https://www.1zoom.me/prev/317/316493.jpg',
            createdate: new Date(),
            snaps: 0
          },
          {
            title: 'un bon repas',
            description: 'yumm c bon :)',
            imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAEQjbz7ZehtjvWXzbX4zC_CCqsh0cwE5ldi0AZmSFQbaisxrAWWk14sPh8FS6f2lN_4&usqp=CAU',
            createdate: new Date(),
            snaps: 0
          }
        ]
        }