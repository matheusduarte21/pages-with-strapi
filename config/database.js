const path = require('path');

module.exports = ({ env }) => {
  const client = 'postgres'; // Defina o cliente como postgres

  const connections = {
    postgres: {
      connection: {
        host: env('DATABASE_HOST', 'aws-0-us-west-1.pooler.supabase.com'), // Host do Supabase
        port: env.int('DATABASE_PORT', 6543), // Porta do Supabase
        database: env('DATABASE_NAME', 'postgres'), // Nome do banco de dados
        user: env('DATABASE_USERNAME', 'postgres.xeslnbkthhnymqyezdwz'), // Usuário do banco de dados
        password: env('DATABASE_PASSWORD', 'WU4xn$epTr3t9QM'), // Substitua por sua senha real
        ssl: {
          rejectUnauthorized: false, // Aceitar conexões com certificados não verificados
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    // Outros conectores (mysql, sqlite) podem ser mantidos, se necessário
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
