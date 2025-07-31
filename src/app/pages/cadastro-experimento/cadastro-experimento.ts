import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { TextareaModule } from 'primeng/textarea';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-cadastro-experimento',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    ToastModule,
    DropdownModule,
    TextareaModule,
    NgClass,
    DividerModule
  ],
  template: `
    <div class="card">
      <h5>Cadastro de Experimento</h5>
      
      <div class="p-fluid grid mt-3">
        <div class="col-12 md:col-6">
          <div class="field flex flex-col mb-4">
            <label for="participante" class="font-semibold mb-2">Adicionar Participante:</label>
            <input pInputText id="participante" type="text" />
          </div>
          <div class="field mb-4">
            <label for="audio">Adicionar Áudio</label>
            <p-fileUpload name="audio[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="audio/*" [multiple]="true" chooseLabel="Escolher" uploadLabel="Enviar" cancelLabel="Cancelar"></p-fileUpload>
          </div>
          <div class="field mb-4">
            <label for="video">Adicionar Vídeo</label>
            <p-fileUpload name="video[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="video/*" [multiple]="true" chooseLabel="Escolher" uploadLabel="Enviar" cancelLabel="Cancelar"></p-fileUpload>
          </div>
          <div class="field">
            <label for="imagem">Adicionar Imagem</label>
            <p-fileUpload name="imagem[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" [multiple]="true" chooseLabel="Escolher" uploadLabel="Enviar" cancelLabel="Cancelar"></p-fileUpload>
          </div>
        </div>

        <div class="col-12 md:col-6">

          <div class="field grid align-items-center mb-4">
              <label for="tipo-emocao" class="col-fixed w-[100px] font-semibold">Tipo</label>
              <div class="col">
                  <p-dropdown 
                      [options]="tiposDeEmocao" 
                      [(ngModel)]="emocaoSelecionada" 
                      placeholder="Selecione um tipo"
                      optionLabel="nome">
                      <ng-template pTemplate="selectedItem" let-selectedOption>
                          <div *ngIf="selectedOption" [ngClass]="selectedOption.styleClass" class="font-bold">
                              {{ selectedOption.nome }}
                          </div>
                      </ng-template>
                      <ng-template let-opcao pTemplate="item">
                          <div [ngClass]="opcao.styleClass" class="font-bold">
                              {{ opcao.nome }}
                          </div>
                      </ng-template>
                  </p-dropdown>
              </div>
          </div>

          <div class="field flex flex-col">
            <label for="descricao" class="font-semibold mb-2">Descrição de Ambiente</label>
            <textarea id="descricao" pTextarea [(ngModel)]="descricaoAmbiente" rows="8" [autoResize]="true"></textarea>
          </div>
        </div>
      </div>

      <p-divider></p-divider>
      <div class="flex justify-content-end">
          <p-button label="Cadastrar" icon="pi pi-check" styleClass="w-auto"></p-button>
      </div>
    </div>
  `,
  providers: [MessageService]
})
export class CadastroExperimentoComponent implements OnInit {

  tiposDeEmocao: any[] = [];
  emocaoSelecionada: any;
  descricaoAmbiente: string = '';

  ngOnInit() {
    this.tiposDeEmocao = [
        { nome: 'Alegria', styleClass: 'text-green-500' },
        { nome: 'Raiva', styleClass: 'text-red-500' },
        { nome: 'Tristeza', styleClass: 'text-blue-500' },
        { nome: 'Medo', styleClass: 'text-orange-500' }
    ];
  }
}