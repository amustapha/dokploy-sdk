/**
 * Monitoring and metrics configuration types
 */

/**
 * Metrics configuration for monitoring systems (e.g., Prometheus, Grafana)
 */
export interface MetricsConfig {
  /**
   * Whether metrics collection is enabled
   */
  enabled?: boolean;
  /**
   * Metrics collection endpoint
   */
  endpoint?: string;
  /**
   * Scrape interval in seconds
   */
  scrapeInterval?: number;
  /**
   * Retention period for metrics data
   */
  retention?: string;
  /**
   * Additional labels to attach to metrics
   */
  labels?: Record<string, string>;
  /**
   * Authentication credentials for metrics endpoint
   */
  auth?: {
    username?: string;
    password?: string;
    token?: string;
  };
}

/**
 * Application monitoring data response
 */
export interface MonitoringData {
  /**
   * CPU usage percentage
   */
  cpuPercent?: number;
  /**
   * Memory usage in bytes
   */
  memoryUsage?: number;
  /**
   * Memory limit in bytes
   */
  memoryLimit?: number;
  /**
   * Memory usage percentage
   */
  memoryPercent?: number;
  /**
   * Network I/O statistics
   */
  network?: {
    /**
     * Bytes received
     */
    rxBytes?: number;
    /**
     * Bytes transmitted
     */
    txBytes?: number;
  };
  /**
   * Disk I/O statistics
   */
  disk?: {
    /**
     * Bytes read
     */
    readBytes?: number;
    /**
     * Bytes written
     */
    writeBytes?: number;
  };
  /**
   * Container or service status
   */
  status?: string;
  /**
   * Timestamp of the monitoring data
   */
  timestamp?: string;
}
