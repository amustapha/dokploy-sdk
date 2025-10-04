/**
 * Docker Swarm service configuration types
 * These types define the structure for Docker Swarm service deployments
 */

/**
 * Docker Swarm health check configuration
 */
export interface SwarmHealthCheck {
  /**
   * The test to perform. Can be a string or an array of strings
   */
  test?: string | string[];
  /**
   * Time between running the check (in nanoseconds)
   */
  interval?: number;
  /**
   * Time to wait before considering the check to have hung (in nanoseconds)
   */
  timeout?: number;
  /**
   * Number of consecutive failures needed to consider container unhealthy
   */
  retries?: number;
  /**
   * Start period for the container to initialize before starting health checks (in nanoseconds)
   */
  startPeriod?: number;
}

/**
 * Docker Swarm restart policy configuration
 */
export interface SwarmRestartPolicy {
  /**
   * Condition for restart: 'none', 'on-failure', 'any'
   */
  condition?: 'none' | 'on-failure' | 'any';
  /**
   * Delay between restart attempts (in nanoseconds)
   */
  delay?: number;
  /**
   * Maximum number of restart attempts
   */
  maxAttempts?: number;
  /**
   * Window used to evaluate the restart policy (in nanoseconds)
   */
  window?: number;
}

/**
 * Docker Swarm placement constraints and preferences
 */
export interface SwarmPlacement {
  /**
   * Placement constraints (e.g., ["node.role==worker"])
   */
  constraints?: string[];
  /**
   * Placement preferences
   */
  preferences?: Array<{
    spread?: {
      spreadDescriptor?: string;
    };
  }>;
  /**
   * Maximum number of replicas per node
   */
  maxReplicas?: number;
  /**
   * Platforms that can run the service
   */
  platforms?: Array<{
    architecture?: string;
    os?: string;
  }>;
}

/**
 * Docker Swarm update configuration
 */
export interface SwarmUpdateConfig {
  /**
   * Number of tasks to update in one iteration
   */
  parallelism?: number;
  /**
   * Time to wait between updates (in nanoseconds)
   */
  delay?: number;
  /**
   * Action on update failure: 'pause', 'continue', 'rollback'
   */
  failureAction?: 'pause' | 'continue' | 'rollback';
  /**
   * Time to monitor updated tasks for failure (in nanoseconds)
   */
  monitor?: number;
  /**
   * Failure rate to tolerate during an update
   */
  maxFailureRatio?: number;
  /**
   * Order of operations during updates: 'stop-first', 'start-first'
   */
  order?: 'stop-first' | 'start-first';
}

/**
 * Docker Swarm rollback configuration
 */
export interface SwarmRollbackConfig {
  /**
   * Number of tasks to rollback in one iteration
   */
  parallelism?: number;
  /**
   * Time to wait between rollbacks (in nanoseconds)
   */
  delay?: number;
  /**
   * Action on rollback failure: 'pause', 'continue'
   */
  failureAction?: 'pause' | 'continue';
  /**
   * Time to monitor rolled back tasks for failure (in nanoseconds)
   */
  monitor?: number;
  /**
   * Failure rate to tolerate during a rollback
   */
  maxFailureRatio?: number;
  /**
   * Order of operations during rollback: 'stop-first', 'start-first'
   */
  order?: 'stop-first' | 'start-first';
}

/**
 * Docker Swarm service mode configuration
 */
export interface SwarmMode {
  /**
   * Replicated service configuration
   */
  replicated?: {
    /**
     * Number of replicas
     */
    replicas?: number;
  };
  /**
   * Global service configuration (one task per node)
   */
  global?: Record<string, never>;
}

/**
 * Docker Swarm service labels
 */
export interface SwarmLabels {
  [key: string]: string;
}

/**
 * Docker Swarm network configuration
 */
export interface SwarmNetwork {
  /**
   * Target network name or ID
   */
  target?: string;
  /**
   * Aliases for the service on this network
   */
  aliases?: string[];
}
