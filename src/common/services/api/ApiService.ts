import axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiService {
  private readonly httpClient: Axios;

  constructor(private baseUrl: string) {
    this.httpClient = new Axios({
      ...axios.defaults,
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
      validateStatus: (status) => status >= 200 && status < 500,
    });

    this.httpClient.interceptors.response.use(
      (response) => {
        if (response.status === 401) {
          // Handle unauthorized access
          window.location.href = "/login";
        }

        return response;
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          // Handle unauthorized access
          window.location.href = "/login";
        }
        return Promise.reject(error);
      },
    );
  }

  public get httpClientInstance(): Axios {
    return this.httpClient;
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public async get<ResponseData>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseData>> {
    return await this.httpClient.get<ResponseData>(url, config);
  }

  public async post<ResponseData, Payload>(
    url: string,
    data?: Payload,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseData>> {
    return await this.httpClient.post<Payload, AxiosResponse<ResponseData>>(url, data, config);
  }

  public async put<ResponseData, Payload>(
    url: string,
    data?: Payload,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseData, Payload>> {
    return await this.httpClient.put<ResponseData>(url, data, config);
  }

  public async patch<ResponseData, Payload>(
    url: string,
    data?: Payload,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseData, Payload>> {
    return await this.httpClient.patch<ResponseData>(url, data, config);
  }

  public async delete<ResponseData>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseData>> {
    return await this.httpClient.delete<ResponseData>(url, config);
  }

  public async head<ResponseData>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseData>> {
    return await this.httpClient.head<ResponseData>(url, config);
  }

  public async options<ResponseData>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseData>> {
    return await this.httpClient.options<ResponseData>(url, config);
  }
}
