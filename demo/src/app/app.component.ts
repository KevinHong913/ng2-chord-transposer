import { Component } from '@angular/core';
import { Ng2ChordTransposeComponent } from 'ng2-chord-transpose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: any = {
    'title': '專心愛你',
    'artist': 'Marian Pan',
    'key': 'F',
    'sections': [
      {
        'id': 41,
        'title': 'Verse 1',
        'body': '$\\n   \\nF     |      Bb\\n耶穌我渴慕你 勝過一切的\\n     Dm   |         C \\n目標和夢想 我要專心來愛你\\n\\n\\nF   |        Bb \\n活著為了永生 那時與你面對面\\n     Dm           C \\n我不忘記 我要專心來愛你',
        'order': 1
      },
      {
        'id': 42,
        'title': 'Chorus',
        'body': '$     Bb     F/A \\n愛你到底 愛你到底\\n     Dm      C \\n用一個清潔誠實的心\\n     Bb     F/A\\n愛你到底 愛你到底\\n     Dm      C \\n毫無保留地專心愛你',
        'order': 2
      },
      {
        'id': 43,
        'title': 'Verse 2',
        'body': '$F           Bb\\n看世界為糞土 只想在你的\\n     Dm            C \\n道路上奔跑 我要專心來愛你\\nF           Bb \\n活著為了永生 那時與你面對面\\n     Dm           C \\n我不忘記 我要專心來愛你',
        'order': 3
      },
      {
        'id': 44,
        'title': 'Instrumental',
        'body': '$Bb  F/A  Dm  C  Bb  F/A  Dm  C\\n(x2)',
        'order': 4
      },
      {
        'id': 45,
        'title': 'Bridge',
        'body': '$   Bb    F/A \\n讓我專心來愛你\\n   Dm     C \\n讓我專心來愛你\\n   Bb    F/A\\n這是我生命唯一\\n   Dm     C \\n讓我專心來愛你',
        'order': 5
      }
    ],
    'tempo': '70',
    'youtube': '',
  };

  setKey(): void {
    this.data.key = 'G';
  }
}
