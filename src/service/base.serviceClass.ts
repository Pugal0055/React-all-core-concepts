import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { Settings } from "src/config";

export interface IBaseService<T> {
  getAll(path: string): Promise<T>;
  getOne(id: string): Promise<T>;

  create(path: string, data: T): Promise<T>;
  update(path: string, id: string, data: T): Promise<T>;
  delete(path: string, id: string): Promise<T>;
}

export class BaseService<T> implements IBaseService<T> {
  private apiUrl: AxiosInstance;

  constructor() {
    this.apiUrl = this.createBaseUrl();
  }

  public createBaseUrl() {
    return Axios.create({
      baseURL: Settings.ApiUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async getAll(path: string): Promise<T> {
    const responce: AxiosResponse = await this.apiUrl.get(path);
    return responce.data;
  }

  public async getOne(id: string): Promise<T> {
    const responce: AxiosResponse = await this.apiUrl.get(id);
    return responce.data;
  }

  public async create(path: string, data: any): Promise<T> {
    const responce: AxiosResponse = await this.apiUrl.post(path, data);
    return responce.data;
  }

  public async update(path: string, id: string, data: T): Promise<T> {
    let updatePath = `${path}/${id}.json`;

    const responce: AxiosResponse = await this.apiUrl.put(updatePath, data);
    return responce.data;
  }

  public async delete(path: string, id: string): Promise<T> {
    let updatePath = `${path}/${id}.json`;
    const responce = await this.apiUrl.delete(updatePath);

    return responce.data;
  }
}

/* 













 public getAll(path: string): Promise<T> {
    return this.apiUrl.get(path);
  }

  public getOne(id: string): Promise<T> {
    return this.apiUrl.get(id);
  }

  public create(path: string, data: any): Promise<T> {
    return this.apiUrl.post(path, data);
  }

  public update(path: string, id: string, data: T): Promise<T> {
    let updatePath = `${path}/${id}.json`;

    return this.apiUrl.put(updatePath, data);
  }

  public delete(path: string, id: string): Promise<T> {
    let updatePath = `${path}/${id}.json`;

    return this.apiUrl.delete(updatePath);
  }

*/
